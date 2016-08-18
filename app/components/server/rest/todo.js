import uuid from 'node-uuid'

export default (app) => {
    var todoCache = {};
    app.get('/rest/todo', function(req, res) {
        var todoArray = [],
            cacheKeys = Object.keys(todoCache),
            i;
        for (i = 0; i < cacheKeys.length; i++) {
            todoArray.push(todoCache[cacheKeys[i]]);
        }
        res.send(todoArray);
    });

    app.post('/rest/todo/:id', function (req, res) {
        var id = req.params.id;
        req.body.id = id;
        todoCache[id] = req.body;
        res.send({
            success: true
        });
    });

    app['delete']('/rest/todo/:id', function(req, res) {
        var id = req.params.id;
        delete todoCache[id];
        res.send({
            success: true
        });
    });

    app.post('/rest/todo', function(req, res) {
        var id = uuid.v1();
        req.body.id = id;
        todoCache[id] = req.body;
        res.send({
            success: true
        });
    });
}