var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')

    // js imports
    .addEntry('app', './assets/js/app.js')
    .addEntry('portfolio', './assets/js/portfolio.js')

    // styling imports
    .addEntry('cv', './assets/less/cv.less')

    .splitEntryChunks()
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .configureBabel(function(babelConfig) {
        babelConfig.plugins.push('@babel/plugin-proposal-class-properties');
    })

    .enableLessLoader()
    .enableReactPreset()

    .enablePostCssLoader(function(options) {
        options.postcssOptions = {
            path: 'postcss.config.js',
        }
    })
;

module.exports = Encore.getWebpackConfig();
