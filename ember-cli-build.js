/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    assetLocation;

assetLocation = function (fileName) {
    if (EmberApp.env() === 'production') {
        fileName = fileName.replace('.', '.min.');
    }
    return '/assets/' + fileName;
};

module.exports = function (defaults) {
    var app = new EmberApp(defaults, {
        outputPaths: {
            app: {
                css: {
                    app: assetLocation('chemdex.css')
                },
                js: assetLocation('chemdex.js')
            },
            vendor: {
                css: assetLocation('vendor.css'),
                js: assetLocation('vendor.js')
            }
        },
        lessOptions: {
            paths: ['bower_components/AdminLTE/build/less']
        },
        hinting: false,
        fingerprint: {enabled: false}
    });

    // Styles
    app.import('bower_components/AdminLTE/bootstrap/css/bootstrap.css');

    // scripts
    app.import('bower_components/AdminLTE/bootstrap/js/bootstrap.js');
    app.import('bower_components/AdminLTE/plugins/slimScroll/jquery.slimscroll.js');
    app.import('bower_components/AdminLTE/plugins/fastclick/fastclick.js');
    app.import('bower_components/AdminLTE/dist/js/app.js');

    return app.toTree();
};
