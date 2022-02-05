module.exports.getNoticias = function(app, req, res){
    const con = app.config.dbconnection()
    const noticiasModel = new app.app.models.NoticiasDAO(con)

    noticiasModel.getNoticias(function(err, result){
        res.render('noticias', {noticias: result})
    })
}

module.exports.getNoticia = function(app, req, res){
    const con = app.config.dbconnection()
    const noticiasModel = new app.app.models.NoticiasDAO(con)

    noticiasModel.getNoticia(req.query.id ,function(err, result){
        res.render('noticia', {noticia: result})
    })
}