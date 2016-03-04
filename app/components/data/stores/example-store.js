var AppDispatcher = require('../app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var ExampleConstants = require('../constants/example-constants');
var merge = require('merge');


var ExampleStore = merge(EventEmitter.prototype, {

});


ExampleStore.dispatcherIndex = AppDispatcher.register(function(payload) {
    var type = payload.actionType,
        data = payload.action;

    console.log(type, data, ExampleConstants);
    return true;
});

module.exports = ExampleStore;