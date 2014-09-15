var R = require("react-rails");

var router = require("./router");

var app = {
    fluxClass: require("./Flux");
    rootClass: require("./Root");
    componentsClasses: require("./componentsClasses"),
    bootstrapTemplateVarsInServer: function bootstrapTemplateVarsInServer(req) {
        return router(req.path);
    },
};

module.exports = app;