/* eslint-disable require-jsdoc, no-use-before-define, no-underscore-dangle, no-console */
/* eslint-env node,es6 */
/**
 * @module output-raw-doclets
 * @author e-cloud
 */

const fs = require('fs');
const path = require('jsdoc/path');
const taffy = require('taffydb').taffy;
const helper = require('jsdoc/util/templateHelper');
const _ = require('lodash');

module.exports = function output(result, AllOptions) {
    const data = processFullTypes(result.doclets, result.sourcefiles, AllOptions);

    fs.writeFileSync(process.cwd() + '/raw.json', JSON.stringify({
        _meta: AllOptions._meta,
        sourcefiles: data.sourcefiles,
        doclets: data.results
    }, null, '  '));

    console.log('Created raw.json');
};

function processFullTypes(doclets, sourcefiles, optionsTree) {
    doclets = doclets.concat(extractOptionsTreeTypes(optionsTree));
    let data = taffy(doclets);

    data = helper.prune(data);

    data({ scope: 'inner' }).remove();
    data({ ignored: true }).remove();

    if (sourcefiles.length) {
        const payload = path.commonPrefix(sourcefiles);
        sourcefiles = shortenPaths(sourcefiles, payload);
    }

    const tokenCache = {};

    // add a shortened version of the full path
    data().each(function (doclet) {
        tokenCache[doclet.longname] = doclet;

        let docletPath;
        if (doclet.meta) {
            docletPath = getPathFromDoclet(doclet);
            if (!_.isEmpty(sourcefiles[docletPath])) {
                docletPath = sourcefiles[docletPath].shortened;
                if (docletPath) {
                    doclet.meta.shortpath = docletPath;
                }
            }
        }
    });

    data().each(function (doclet) {
        if (tokenCache['Highcharts.' + doclet.longname]) {
            doclet.longname = 'Highcharts.' + doclet.longname;
            doclet.memberof = doclet.memberof ? 'Highcharts.' + doclet.memberof : 'Highcharts';
        }

        if (tokenCache['Highcharts.' + doclet.memberof]) {
            doclet.memberof = 'Highcharts.' + doclet.memberof;
            doclet.longname = 'Highcharts.' + doclet.longname;
        }

        if (doclet.type) {
            normalizeTypeObj(doclet.type);
        }

        if (doclet.params) {
            doclet.params.forEach(p => {
                if (p.type) {
                    normalizeTypeObj(p.type);
                }
            });
        }

        if (doclet.returns) {
            doclet.returns.forEach(p => {
                if (p.type) {
                    normalizeTypeObj(p.type);
                }
            });
        }

        if (doclet.properties) {
            doclet.properties.forEach(p => {
                if (p.type) {
                    normalizeTypeObj(p.type);
                }
            });
        }

        if (doclet.mixes) {
            doclet.mixes = doclet.mixes.map(normalizeCustomType);
        }

        if (doclet.augments) {
            doclet.augments = doclet.augments.map(normalizeCustomType);
        }

        if (doclet.kind === 'member' && !doclet.type) {
            if (!doclet.meta.code || !Object.keys(doclet.meta.code).length) {
                doclet.type = {
                    names: ['*']
                };
            } else {
                doclet.type = {
                    names: [inferNodeType(doclet.meta.code.node)]
                };
            }
        }

        // this is special hack for highcharts mixin, making its scope as instance
        // to generate proper class types implementing these interfaces
        if (tokenCache[doclet.memberof] && tokenCache[doclet.memberof].kind === 'mixin') {
            doclet.scope = 'instance';
        }
    });

    data.sort('longname, version, since');

    let results = data().get();

    results.forEach(i => {
        delete i.___id;
        delete i.___s;
    });

    return { results, sourcefiles };

    function normalizeTypeObj(obj) {
        obj.names = obj.names.map(normalizeCustomType);
    }

    function normalizeCustomType(type) {
        if (tokenCache['Highcharts.' + type]) {
            return 'Highcharts.' + type;
        }
        if (type.startsWith('Array')) {
            const matches = /Array\.?<\(?(.+?>?)\)?>$/.exec(type);
            if (matches && matches[1]) {
                type = `Array.<${matches[1].split('|').map(normalizeCustomType).join('|')}>`;
            }
        }
        return type;
    }

    function inferNodeType(node) {
        switch (node.type) {
            case 'ObjectExpression':
                return 'object';

            case 'FunctionExpression':
                return 'function';

            case 'LogicalExpression':
                return 'boolean';

            case 'BinaryExpression':
                return inferBinaryExpression(node);

            case 'AssignmentExpression':
                return inferNodeType(node.right);

            case 'ArrayExpression':
                if (node.elements.length) {
                    return 'Array.<' + inferNodeType(node.elements[0]) + '>';
                }
                return 'Array.<*>';

            case 'Property':
                return 'object';

            case 'Literal':
                return typeof node.value;

            default:
                return '*';
        }
    }

    function inferBinaryExpression(node) {
        const { left, right, operator } = node;
        if (operator !== '+') {
            return 'number';
        }

        if (left.type === 'Literal' && right.type === 'Literal') {
            return typeof left.value;
        }

        if (left.type === 'Identifier') {
            return right.type === 'Identifier' ? '*' : typeof right.value;
        }

        if (right.type === 'Identifier') {
            return left.type === 'Identifier' ? '*' : typeof left.value;
        }

        return '*';
    }
}

function constructOptionTypeName(name, level) {
    if (level === 0 && !name.endsWith('Options')) {
        name = name + 'Options';
    }

    return _.upperFirst(name);
}

function constructOptionPathTypeName(pathStr) {
    const segs = pathStr.split('.');

    if (segs[0] && !segs[0].endsWith('Options')) {
        segs[0] = segs[0] + 'Options';
    }

    return segs.map(_.upperFirst).join('');
}

function extractOptionsTreeTypes(optionsTree) {
    // const context = [];
    let level = 0;
    const map = new Map();

    // build the root level option type
    Object.keys(optionsTree).forEach(id => {
        if (!id.startsWith('_')) {
            buildSubOptionType(id, optionsTree[id], '', map);
        }
    });

    return Array.from(map.values());

    function buildSubOptionType(typeId, optionInfo, parentType, typesMap) {
        const { doclet, children, meta } = optionInfo;

        // build a new member doclet for the parent type
        const memDoclet = {};
        memDoclet.name = typeId;
        memDoclet.memberof = 'Highcharts.' + (parentType || 'Options');
        memDoclet.longname = memDoclet.memberof + '.' + typeId;
        memDoclet.kind = 'member';
        memDoclet.meta = meta;
        memDoclet.description = 'Auto-gen doc for ' + memDoclet.longname;
        memDoclet.type = doclet.type;

        typesMap.set(memDoclet.longname, memDoclet);

        const possibleSubTypes = Object.keys(children);
        if (possibleSubTypes.length || doclet.augments) {
            // take the origin doclet's comment for new sub type
            // make it as interface doclet
            doclet.name = parentType + constructOptionTypeName(typeId, level);
            doclet.longname = 'Highcharts.' + doclet.name;
            doclet.memberof = 'Highcharts';
            doclet.kind = 'interface';
            doclet.scope = 'static';
            doclet.meta = meta;
            doclet.access = null;
            doclet.undocumented = false;
            if (doclet.augments) {
                doclet.augments = doclet.augments.join(',').split(',').map(constructOptionPathTypeName);
            }

            typesMap.set(doclet.longname, doclet);

            const isArrayLikeItemType = !!(doclet.type && doclet.type.names[0].startsWith('Array'));

            memDoclet.type = {
                names: [isArrayLikeItemType ? (doclet.type.names[0].replace(/<([\w.]+)>/, '<' + doclet.name + '>')) : doclet.name]
            };

            level++;
            // traverse down sub type's members for possible sub* types
            possibleSubTypes.forEach(id => {
                buildSubOptionType(id, children[id], doclet.name, typesMap);
            });
            level--;
        }
    }
}

function shortenPaths(files, commonPrefix) {
    return files.map(function (file) {
        return file.replace(commonPrefix, '')
            // always use forward slashes
            .replace(/\\/g, '/');
    });
}

function getPathFromDoclet(doclet) {
    if (!doclet.meta || !Object.keys(doclet.meta).length) {
        return null;
    }

    return path.normalize(doclet.meta.path && doclet.meta.path !== 'null' ?
        doclet.meta.path + '/' + doclet.meta.filename :
        doclet.meta.filename);
}
