module.exports = function(application){
    application.get('/noticia', function(req, res){
        application.app.controllers.noticias.getNoticia(application, req, res)
    })
}