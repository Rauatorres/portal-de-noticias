module.exports = function(application){
    application.get('/noticias', function(req, res){
        application.app.controllers.noticias.getNoticias(application, req, res)
    })
}