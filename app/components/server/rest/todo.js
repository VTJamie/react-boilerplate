export default (app) => {
    var todoCache = [];
    app.get('/rest/todo', function(req, res) {
        res.send(todoCache);
    });

    app.post('/rest/todo', function(req, res) {    
    	req.body.checked = true;
        todoCache.push(req.body);
        res.send({
        });
    });
}