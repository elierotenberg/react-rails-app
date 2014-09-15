var R = require("../R");

var Dispatcher = require("./Dispatcher");

var Flux = R.Flux.createFlux({
    bootstrap: function bootstrap() {
        this.registerStore("memory", new R.Store.MemoryStore());
        this.registerStore("uplink", new R.Store.UplinkStore());
        this.registerEventEmitter("memory", new R.EventEmitter.MemoryEventEmitter());
        this.registerEventEmitter("uplink", new R.EventEmitter.UplinkEventEmitter());
        this.registerDispatcher("memory", new R.Dispatcher.MemoryDispatcher(this.getStore("memory")));
        this.registerDispatcher("uplink", new R.Dispatcher.UplinkDispatcher());
    },
    bootstrapInClient: function bootstrapInClient(window, guid) {

    },
    bootstrapInServer: function bootstrapInServer(req, guid) {

    },
});