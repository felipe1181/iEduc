
module.exports = (app) => {
    console.log('rotassssssssssss');
    console.log(app.src);
    app.post('/users', function (app, req, res) {
        app.src.controllers.UserController.store(app, req, res);
    });
}
