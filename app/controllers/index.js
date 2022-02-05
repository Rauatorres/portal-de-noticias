module.exports.getIndex = function(app, req, res){
    const con = app.config.dbconnection()
    const model = new app.app.models.NoticiasDAO(con)

    model.getNoticias(function(err, result){
        res.render('index', {noticias: result})
    })
}