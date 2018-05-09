/* eslint-disable require-jsdoc, no-use-before-define, no-underscore-dangle, no-console */
/* eslint-env node,es6 */
/**
 * @module plugins/highcharts.jsdoc
 * @author Chris Vasseng
 */


const exec = require('child_process').execSync;
const logger = require('jsdoc/util/logger');
const fs = require('fs');
const path = require('jsdoc/path');
const getPalette = require('highcharts-assembler/src/process.js').getPalette;
const outputRawDoclets = require('../output-raw-doclets');

const hcRoot = path.join(__dirname, '/../../..');
const AllOptions = {
    _meta: {
        commit: '',
        branch: ''
    }
};

function getLocation(option) {
    return {
        start:
            (option.leadingComments && option.leadingComments[0].loc.start) ||
            option.key.loc.start,
        end:
            (option.leadingComments && option.leadingComments[0].loc.end) ||
            option.key.loc.end
    };
}

function dumpOptions() {
    fs.writeFileSync(
        'tree.json',
        JSON.stringify(
            AllOptions,
            null,
            '  '
        )
    );
}

// eslint-disable-next-line no-unused-vars
function createSitemaps() {
    const manualBoost = {
        'plotOptions.series': 100
    };
    const sitemapIndex = [];
    const sitemaps = {};

    // Add function for option sitemaps
    function addToSitemaps(node, boost, parentProducts) {
        if (!node.doclet ||
            !node.meta ||
            !node.meta.fullname
        ) {
            return;
        }
        boost = (manualBoost[node.meta.fullname] || boost);
        let products = (parentProducts || node.doclet.products);
        for (let i = 0, ie = products.length; i < ie; ++i) {
            let product = products[i];
            sitemaps[product] = (sitemaps[product] || []);
            sitemaps[product].push(
                '<url><loc>https://api.highcharts.com/' + product + '/' +
                node.meta.fullname + '.html</loc><priority>' +
                (boost / 100) +
                '</priority></url>'
            );
        }
        if (!node.children) {
            return;
        }
        boost -= 5;
        for (const child in node.children) {
            if (node.children.hasOwnProperty(child)) {
                addToSitemaps(node.children[child], boost, products);
            }
        }
    }

    // Directory function
    function createDirectoriesSync(dirPath, mode, callback) {
        try {
            fs.mkdirSync(dirPath, mode);
            if (callback) {
                // eslint-disable-next-line callback-return
                callback();
            }
        } catch (error) {
            if (error.errno === 34) {
                createDirectoriesSync(path.dirname(dirPath), mode, callback);
                createDirectoriesSync(dirPath, mode, callback);
            }
        }
    }

    // Add Highcharts options
    for (var option in AllOptions) {
        if (AllOptions[option].doclet &&
            AllOptions[option].doclet.products
        ) {
            addToSitemaps(AllOptions[option], 100,
                AllOptions[option].doclet.products
            );
        } else {
            addToSitemaps(AllOptions[option], 100, [
                'highcharts', 'highstock', 'highmaps'
            ]);
        }
    }
    // Add Highcharts class reference to products
    sitemaps['class-reference'] = (sitemaps['class-reference'] || []);
    fs.readdirSync('build/api/class-reference').forEach(function (fileName) {
        if (fileName.lastIndexOf('.html') !== fileName.length - 5) {
            return;
        }
        sitemaps['class-reference'].push(
            '<url><loc>https://api.highcharts.com/class-reference/' + fileName +
            '</loc><priority>0.75</priority></url>'
        );
    });
    // Add Highcharts products to sitemap index
    for (const product in sitemaps) {
        if (sitemaps.hasOwnProperty(product)) {
            sitemapIndex.push(
                '<sitemap><loc>https://api.highcharts.com/' + product +
                '/sitemap.xml</loc></sitemap>'
            );
        }
    }
    // Add Highcharts wrapper to sitemap index
    sitemapIndex.push(
        '<sitemap><loc>' +
        'https://api.highcharts.com/ios/highcharts/sitemap.xml' +
        '</loc></sitemap>'
    );
    sitemapIndex.push(
        '<sitemap><loc>' +
        'https://api.highcharts.com/android/highcharts/sitemap.xml' +
        '</loc></sitemap>'
    );
    // Write sitemaps
    try {
        createDirectoriesSync('build/api');
        fs.writeFileSync(
            'build/api/sitemap.xml',
            '<?xml version="1.0" encoding="UTF-8"?>' +
            '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
            sitemapIndex.sort().join('') +
            '</sitemapindex>'
        );
        for (const product in sitemaps) {
            if (sitemaps.hasOwnProperty(product)) {
                createDirectoriesSync('build/api/' + product);
                fs.writeFileSync(
                    'build/api/' + product + '/sitemap.xml',
                    '<?xml version="1.0" encoding="UTF-8"?>' +
                    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
                    sitemaps[product].sort().join('') +
                    '</urlset>'
                );
            }
        }
        // console.log('Wrote sitemaps!');
    } catch (error) {
        console.error(error);
    }
}

function resolveBinaryExpression(node) {
    let val = '';
    let lside = '';
    let rside = '';

    if (node.left.type === 'Literal') {
        lside = node.left.value;
    }

    if (node.right.type === 'Literal') {
        rside = node.right.value;
    }

    if (node.left.type === 'BinaryExpression') {
        lside = resolveBinaryExpression(node.left);
    }

    if (node.right.type === 'BinaryExpression') {
        rside = resolveBinaryExpression(node.right);
    }

    if (node.operator === '+') {
        val = lside + rside;
    }

    // This is totally not needed, but maybe someone is doing something
    // really really strange, so might as well support it
    if (node.operator === '-') {
        val = lside - rside;
    }

    return val;
}

/*
 * decorate options properties, mainly for those properties inside the option tree while nears the leaf end
 */
function decorateOptions(parent, optionMap, optionNode, filename) {
    if (!optionNode) {
        optionMap.log('WARN: decorateOptions called with no valid AST node');
        return;
    }

    if (
        optionNode.leadingComments &&
        optionNode.leadingComments[0].value.includes('@ignore')
    ) {
        return;
    }

    const index = optionNode.key.name;

    // turn `x` into `x.`
    if (parent && parent.length > 0) {
        parent += '.';
    }

    optionMap[index] = optionMap[index] || {
        doclet: {},
        //  type: option.key.type,
        children: {}
    };

    // Look for the start of the doclet first
    const location = getLocation(optionNode);

    optionMap[index].meta = {
        fullname: parent + index,
        name: index,
        line: location.start.line,
        lineEnd: location.end.line,
        column: location.start.column,
        filename: filename
    };

    calculateOptionDefault(optionNode, optionMap, index, parent, filename);

    // Add options decorations directly to the node
    optionNode.highcharts = optionNode.highcharts || {};
    optionNode.highcharts.fullname = parent + index;
    optionNode.highcharts.name = index;
    optionNode.highcharts.isOption = true;
}

function calculateOptionDefault(optionNode, optionMap, index, parent, filename) {
    if (optionNode.value) {
        switch (optionNode.value.type) {
            case 'ObjectExpression':
                // This is a nested object probably
                optionNode.value.properties.forEach(function (sub) {
                    const s = optionMap[index].children;

                    decorateOptions(
                        parent + index,
                        s,
                        sub,
                        filename
                    );
                });
                break;

            case 'Literal':
                optionMap[index].meta.default = optionNode.value.value;
                break;

            case 'UnaryExpression':
                if (optionNode.value.argument && optionNode.value.argument.type === 'Literal') {
                    optionMap[index].meta.default = optionNode.value.operator + optionNode.value.argument.value;

                    if (!isNaN(optionMap[index].meta.default) && isFinite(optionMap[index].meta.default)) {
                        optionMap[index].meta.default = parseInt(optionMap[index].meta.default, 10);
                    }
                }
                break;

            case 'ArrayExpression':
                optionMap[index].meta.default = `[${optionNode.value.elements.map(elem => elem.value).join(',')}]`;
                break;

            case 'BinaryExpression':
                optionMap[index].meta.default = resolveBinaryExpression(optionNode.value);
                break;

            default:
                break;
        }
    }
}


function appendComment(node, lines) {

    if (typeof node.comment !== 'undefined') {
        node.comment = node.comment.replace(/\/\*/g, '').replace(/\*\//g, '*');
        node.comment = '/**\n' + node.comment + '\n* ' + lines.join('\n* ') + '\n*/';
    } else {
        node.comment = '/**\n* ' + lines.join('\n* ') + '\n*/';
    }

    node.event = 'jsdocCommentFound';
}

function decorateProperties(node, filename, parentPath, optionMap, evt) {
    let properties;
    if (node.type === 'CallExpression' && node.callee.name === 'seriesType') {
        console.log('    found series type', node.arguments[0].value, '- inherited from', node.arguments[1].value);
        properties = node.arguments[2].properties;
    } else if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression' && node.callee.property.name === 'setOptions') {
        properties = node.arguments[0].properties;
    } else if (node.type === 'ObjectExpression') {
        properties = node.properties;
    } else if (node.init && node.init.type === 'ObjectExpression') {
        properties = node.init.properties;
    } else if (node.value && node.value.type === 'ObjectExpression') {
        properties = node.value.properties;
    } else if (node.operator === '=' && node.right.type === 'ObjectExpression') {
        properties = node.right.properties;
    } else if (node.right && node.right.type === 'CallExpression' && node.right.callee.property.name === 'seriesType') {
        console.log('    found series type', node.right.arguments[0].value, '- inherited from', node.right.arguments[1].value);
        properties = node.right.arguments[2].properties;
    } else {
        logger.error('code tagged with @optionparent must be an object:', filename, node);
    }

    if (properties && properties.length > 0) {
        properties.forEach(function (child) {
            decorateOptions(parentPath, optionMap, child, evt.filename || filename);
        });
    } else {
        console.log('INVALID properties for node', node);
    }
}

function nodeVisitor(node, evt, parser, currentSourceName) {
    let shouldIgnore = false;

    if (node.highcharts && node.highcharts.isOption) {

        shouldIgnore = (evt.comment || '').includes('@ignore-option');

        if (shouldIgnore) {
            removeOption(node.highcharts.fullname);
            return;
        } else if (!(evt.comment || '').includes('@apioption')) {
            appendComment(evt, ['@optionparent ' + node.highcharts.fullname]);
        } else if ((evt.comment || '').includes('@apioption tooltip')) {
            console.log(evt.comment);
        }

        return;
    }

    if (node.leadingComments && node.leadingComments.length > 0) {

        if (!evt.comment) {
            let rawComment = '';
            (node.leadingComments || []).find(function (c) {
                // We only use the one containing @optionparent
                rawComment = c.raw || c.value;
                return rawComment.includes('@optionparent');
            });

            evt.comment = rawComment;
            // e.comment = node.leadingComments[0].raw || node.leadingComments[0].value;
        }

        const parentIndex = evt.comment.indexOf('@optionparent');

        if (parentIndex >= 0) {
            // something like `x.y.z`
            const potentialParentPath = evt.comment.substr(parentIndex).trim().split('\n')[0].trim().split(' ');

            let parentPath;
            let optionMap;

            if (potentialParentPath && potentialParentPath.length > 1) {
                parentPath = potentialParentPath[1].trim() || '';
                optionMap = createSubOptionTree(parentPath, node, currentSourceName);
            } else {
                parentPath = '';
                optionMap = AllOptions;
            }
            if (optionMap) {
                decorateProperties(node, currentSourceName, parentPath, optionMap, evt);
            } else {
                logger.error('@optionparent is missing an argument');
            }
        }
    }
}

/*
 * construct a subtree of the target option parent, like x.y.z
 * to be { x: { children: { y: { children: { z: {} } } } } }
 */
function createSubOptionTree(pathStr, node, filename) {
    const seqs = pathStr.split('.');
    let optionMap = AllOptions;
    let fullPath = '';

    seqs.forEach(function (p) {
        fullPath = fullPath + (fullPath.length > 0 ? '.' : '') + p;

        optionMap[p] = optionMap[p] || {};

        optionMap[p].doclet = optionMap[p].doclet || {};
        optionMap[p].children = optionMap[p].children || {};

        let location = getLocation(node);
        optionMap[p].meta = {
            filename,
            name: p,
            fullname: fullPath,
            line: location.start.line,
            lineEnd: location.end.line,
            column: location.start.column
        };

        optionMap = optionMap[p].children;
    });

    return optionMap;
}

// eslint-disable-next-line
////////////////////////////////////////////////////////////////////////////////

function isNum(what) {
    return !isNaN(parseFloat(what)) && isFinite(what);
}

function isBool(what) {
    return (what === true || what === false);
}

function isStr(what) {
    return (typeof what === 'string' || what instanceof String);
}

function inferType(opt) {
    opt.doclet = opt.doclet || {};
    opt.meta = opt.meta || {};

    if (typeof opt.doclet.type !== 'undefined') {
        // We allready have a type, so no infering is required
        return;
    }

    let defaultVal = opt.doclet.defaultvalue;

    if (typeof opt.meta.default !== 'undefined' && typeof opt.doclet.defaultvalue === 'undefined') {
        defaultVal = opt.meta.default;
    }

    if (typeof defaultVal === 'undefined') {
        // There may still be hope - if this node has children, it's an object.
        if (opt.children && Object.keys(opt.children).length) {
            opt.doclet.type = {
                names: ['Object']
            };
        }

        // We can't infer this type, so abort.
        return;
    }

    opt.doclet.type = {
        names: []
    };

    if (isBool(defaultVal)) {
        opt.doclet.type.names.push('Boolean');
    }

    if (isNum(defaultVal)) {
        opt.doclet.type.names.push('Number');
    }

    if (isStr(defaultVal)) {
        opt.doclet.type.names.push('String');
    }

    // If we were unable to deduce a type, assume it's an object
    if (opt.doclet.type.names.length === 0) {
        opt.doclet.type.names.push('Object');
    }

}

function augmentOption(opath, doclet) {
    // This is super nasty.
    let current = AllOptions,
        segments = (opath || '').trim().split('.');

    if (!doclet || !opath) {
        return;
    }

    try {
        segments.forEach(function (thing, i) {
            // thing = thing.trim();

            if (i === segments.length - 1) {
                // Merge in stuff
                current[thing] = current[thing] || {};

                current[thing].doclet = current[thing].doclet || {};
                current[thing].children = current[thing].children || {};
                current[thing].meta = current[thing].meta || {};

                // Free floating doclets marked with @apioption
                if (!current[thing].meta.filename) {
                    current[thing].meta.filename = doclet.meta.path + '/' + doclet.meta.filename;
                    current[thing].meta.line = doclet.meta.lineno;
                    current[thing].meta.lineEnd = doclet.meta.lineno + doclet.comment.split(/\n/g).length - 1;
                }

                Object.keys(doclet).forEach(function (property) {
                    if (property !== 'comment' && property !== 'meta') {
                        current[thing].doclet[property] = doclet[property];
                    }
                });
                return;
            }

            current[thing] = current[thing] || {
                children: {}
            };
            current = current[thing].children;
        });

    } catch (e) {
        console.log('ERROR deducing path', opath);
    }
}

function removeOption(opath) {
    let current = AllOptions,
        segments = (opath || '').split('.');

    // console.log('found ignored option: removing', path);

    if (!segments) {
        return;
    }

    segments.some(function (thing, i) {
        if (i === segments.length - 1) {
            delete current[thing];
            return true;
        }

        if (!current[thing]) {
            return true;
        }

        current = current[thing].children;

        return false;
    });
}

/*
 * Resolve properties where the product can be specified like {highcharts|highmaps}
 * etc. Return an object with value and products.
 */
function resolveProductTypes(doclet, tagObj) {
    let reg = /^\{([a-z\|]+)\}/g,
        match = tagObj.value.match(reg),
        products,
        value = tagObj.value;

    if (match) {
        value = value.replace(reg, '');
        products = match[0].replace('{', '').replace('}', '').split('|');
    }

    doclet[tagObj.originalTitle] = {
        value: value.trim(),
        products: products
    };
    return doclet[tagObj.originalTitle];
}

// eslint-disable-next-line
////////////////////////////////////////////////////////////////////////////////

exports.defineTags = function (dictionary) {
    dictionary.defineTag('apioption', {
        onTagged: function (doclet, tagObj) {

            if (doclet.ignored) {
                removeOption(tagObj.value);
                return;
            }

            augmentOption(tagObj.value, doclet);
            doclet.apioption = true;

            doclet.name = tagObj.value;
        }
    });

    dictionary.defineTag('sample', {
        onTagged: function (doclet, tagObj) {

            let valueObj = resolveProductTypes(doclet, tagObj);

            let text = valueObj.value;

            let del = text.search(/\s/),
                name = text.substr(del).trim().replace(/\s\s+/g, ' '),
                value = text.substr(0, del).trim(),
                folder = hcRoot + /samples/ + value;

            doclet.samples = doclet.samples || [];

            if (!fs.existsSync(folder)) {
                logger.error('@sample does not exist: ' + value);
            }
            doclet.samples.push({
                name: name,
                value: value,
                products: valueObj.products
            });
        }
    });

    dictionary.defineTag('context', {
        onTagged: function (doclet, tagObj) {
            doclet.context = tagObj.value;
        }
    });

    dictionary.defineTag('optionparent', {
        onTagged: function (doclet, tagObj) {
            if (doclet.ignored) {
                removeOption(tagObj.value);
                return;
            }

            augmentOption(tagObj.value, doclet);
            doclet.optionparent = true;
            doclet.name = tagObj.value;
        }
    });

    dictionary.defineTag('product', {
        onTagged: function (doclet, tagObj) {
            let adds = tagObj.value.split(' ');
            doclet.products = doclet.products || [];

            // Need to make sure we don't add dupes
            adds.forEach(function (add) {
                if (doclet.products.filter(function (e) {
                    return e === add;
                }).length === 0) {
                    doclet.products.push(add);
                }
            });
        }
    });

    dictionary.defineTag('exclude', {
        onTagged: function (doclet, tagObj) {
            let items = tagObj.text.split(',');

            doclet.exclude = doclet.exclude || [];

            items.forEach(function (entry) {
                doclet.exclude.push(entry.trim());
            });
        }
    }).synonym('excluding');

    dictionary.defineTag('ignore-option', {
        onTagged: function (doclet) {
            doclet.ignored = true;
        }
    });

    dictionary.defineTag('default', {
        onTagged: function (doclet, tagObj) {
            if (!tagObj.value) {
                return;
            }

            if (!tagObj.value.includes('highcharts') &&
                !tagObj.value.includes('highmaps') &&
                !tagObj.value.includes('highstock')) {

                doclet.defaultvalue = tagObj.text;
                return;
            }

            let valueObj = resolveProductTypes(doclet, tagObj);

            doclet.defaultByProduct = doclet.defaultByProduct || {};

            (valueObj.products || []).forEach(function (p) {
                doclet.defaultByProduct[p] = valueObj.value;
            });

            // let parsed = parseTag(tagObj.value, true, true);
            // doclet.defaultvalue = parsed;
        }
    });

    function handleValue(doclet, tagObj) {
        let t;
        doclet.values = doclet.values || [];

        // A lot of these options are defined as json.
        try {
            t = JSON.parse(tagObj.value);
            if (Array.isArray(t)) {
                doclet.values = doclet.values.concat(t);
            } else {
                doclet.values.push(t);
            }
        } catch (e) {
            doclet.values.push(tagObj.value);
        }
    }

    dictionary.defineTag('validvalue', {
        onTagged: function (doclet, tag) {
            handleValue(doclet, tag);
        }
    });

    dictionary.defineTag('values', {
        onTagged: function (doclet, tag) {
            handleValue(doclet, tag);
        }
    });

    // dictionary.defineTag('extends', {
    //     onTagged: function (doclet, tagObj) {
    //         doclet.extends = tagObj.value;
    //     }
    // });

    dictionary.defineTag('productdesc', {
        onTagged: resolveProductTypes
    });
};

exports.astNodeVisitor = {
    visitNode: nodeVisitor
};

exports.handlers = {
    beforeParse: function (e) {
        let palette = getPalette(hcRoot + '/css/highcharts.scss');

        Object.keys(palette).forEach(function (key) {
            let reg = new RegExp('\\$\\{palette\\.' + key + '\\}', 'g');

            e.source = e.source.replace(
                reg,
                palette[key]
            );
        });

        let match = e.source.match(/\s\*\/[\s]+\}/g);
        if (match) {
            console.log(
                `Warning: Detected ${match.length} cases of a comment followed by } in
${e.filename}.
This may lead to loose doclets not being parsed into the API. Move them up
before functional code for JSDoc to see them.`.yellow
            );
        }
    },

    newDoclet: function (e) {
        const doclet = e.doclet;

        if (/^(H$|H\.)/.test(doclet.memberof)) {
            doclet.memberof = doclet.memberof.replace(/^H$/, 'Highcharts').replace(/^H\./, 'Highcharts.');
            doclet.longname = doclet.longname.replace(/^H\./, 'Highcharts.');
            if (doclet.augments) {
                doclet.augments = doclet.augments.map(arg => arg.replace(/^H\./, 'Highcharts.'));
            }
        }

        if (doclet.longname.startsWith('Series.')) {
            doclet.longname = doclet.longname.replace('Series.', 'Highcharts.Series#');
            doclet.memberof = doclet.memberof.replace('Series', 'Highcharts.Series');
        }

        if (doclet.longname.startsWith('seriesTypes.')) {
            doclet.longname = doclet.longname.replace('seriesTypes.', 'Highcharts.seriesTypes.');
            doclet.memberof = doclet.memberof.replace('seriesTypes', 'Highcharts.seriesTypes');
        }

        if (doclet.kind === 'member' && doclet.scope === 'global' && !doclet.memberof || doclet.apioption || doclet.optionparent) {
            doclet.ignored = true;
        }

        if (doclet.kind === 'typedef' && !doclet.memberof) {
            doclet.memberof = 'Highcharts';
        }

        if (doclet.chartPrivate) {
            doclet.access = null;
        }
    },

    parseComplete: function (result) {
        AllOptions._meta.version = require(path.join(__dirname, '/../../../package.json')).version;
        AllOptions._meta.commit = exec('git rev-parse --short HEAD', {
            cwd: process.cwd()
        }).toString().trim();
        AllOptions._meta.branch = exec('git rev-parse --abbrev-ref HEAD', {
            cwd: process.cwd()
        }).toString().trim();
        AllOptions._meta.date = (new Date()).toString();

        let files = {};

        function inferTypeForTree(obj) {
            inferType(obj);

            if (obj.meta && obj.meta.filename) {
                // Remove user-identifiable info in filename
                obj.meta.filename = obj.meta.filename.substr(
                    obj.meta.filename.indexOf('highcharts')
                );
            }

            files[obj.meta.filename] = 1;

            // Infer types
            if (obj.children) {
                Object.keys(obj.children).forEach(function (child) {
                    // work around #8260:
                    if (child === '' || child === 'undefined') {
                        delete obj.children[child];
                        return;
                    }
                    inferTypeForTree(obj.children[child]);
                });
            }
        }

        Object.keys(AllOptions).forEach(function (name) {
            // work around #8260:
            if (name === '' || name === 'undefined') {
                delete AllOptions[name];
                return;
            }
            if (name !== '_meta') {
                inferTypeForTree(AllOptions[name]);
            }
        });

        Object.keys(AllOptions.plotOptions.children).forEach(addSeriesTypeDescription);

        outputRawDoclets(result, AllOptions);

        dumpOptions();
        // createSitemaps();
    }
};

function addSeriesTypeDescription(type) {
    let node = type;

    // Make sense of the examples for general series
    if (type === 'series') {
        type = 'line';
    }
    let s = `

Configuration options for the series are given in three levels:
1. Options for all series in a chart are defined in the [plotOptions.series](plotOptions.series)
object. 
2. Options for all \`${type}\` series are defined in [plotOptions.${type}](plotOptions.${type}).
3. Options for one single series are given in
[the series instance array](series.${type}).

<pre>
Highcharts.chart('container', {
    plotOptions: {
        series: {
            // general options for all series
        },
        ${type}: {
            // shared options for all ${type} series
        }
    },
    series: [{
        // specific options for this series instance
        type: '${type}'
    }]
});
</pre>
    `;
    AllOptions.plotOptions.children[node].doclet.description += s;
    if (AllOptions.series.children[node]) {
        AllOptions.series.children[node].doclet.description += s;
    }
}
