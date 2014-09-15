var R = require("../");

var router = new R.Router();

var routeHandler = function routeHandler(title, description, name) {
    return {
        title: title,
        description: description,
        name: name,
    };
};

router.register("/", routeHandler("React on Rails", "React on Rails", "home"));
router.register("/api", routeHandler("API", "React on Rails API", "api"));
router.register("/faq", routeHandler("FAQ", "React on Rails FAQ", "faq"));
