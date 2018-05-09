/* eslint-disable require-jsdoc, no-use-before-define, no-underscore-dangle, no-console */
/* eslint-env node,es6 */

const taffy = require('taffydb').taffy;
const fs = require('fs');
const path = require('path');
const Emitter = require('tsd-jsdoc/dist/Emitter').default;

module.exports.publish = function publish() {
    const raw = require(path.join(process.cwd(), 'raw.json'));
    const banner = `
// Type definitions for Highcharts ${raw._meta.version}
// Project: https://github.com/Highcharts/Highcharts
// Definitions by: e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/Highcharts/Highcharts

`;

    const data = taffy(raw.doclets);

    // remove undocumented stuff.
    data({ undocumented: true }).remove();
    data({ kind: 'function', scope: 'global' }).remove();

    // get the doc list
    const docs = data().get();

    // create an emitter to parse the docs
    const emitter = new Emitter(docs, {});

    // emit the output
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(process.cwd(), 'highcharts.d.ts'), banner + emitter.emit(), (e) => {
            return e ? reject() : resolve();
        });
    });
};
