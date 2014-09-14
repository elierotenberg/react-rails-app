var R = require("react-rails");

var app = {
    fluxClass: require("./Flux");
    rootClass: require("./Root");
    componentsClasses: require("./componentsClasses"),
    bootstrapTemplateVarsInServer: function bootstrapTemplateVarsInServer(req) {
        return {
            lang: "en-US",
            description: "React on Rails App Example",
            title: "React on Rails",
            client: "/client.js",
        };
    },
};

module.exports = app;