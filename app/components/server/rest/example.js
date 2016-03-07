export default (app) => {
    app.get('/rest/example', function(req, res) {
        res.send({
            "example": [
                "One",
                "Two",
                "Three"
            ]
        });
    });
}