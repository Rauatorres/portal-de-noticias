module.exports.getAddnoticia = function(app, req, res){
    res.render('addnoticia', {validacao: {}, noticia: {}})
}

module.exports.getRequest = function(app, req, res){
    req.assert('titulo', 'Título é obrigatório').notEmpty()
    req.assert('autor', 'Autor é obrigatório').notEmpty()
    req.assert('resumo', 'Resumo é obrigatório').notEmpty()
    req.assert('resumo', 'Resumo deve ter entre 10 e 100 caracteres').len(10, 100)
    req.assert('noticia', 'Conteúdo é obrigatório').notEmpty()

    let erros = req.validationErrors()
    let body = req.body

    if (erros){
        console.log(erros)
        res.render('addnoticia', {validacao: erros, noticia: body})
        return
    }

    const con = app.config.dbconnection()
    const noticiasModel = new app.app.models.NoticiasDAO(con)

    noticiasModel.addNoticia(body, function(err, result){
        if (err){
            throw err
        }else{
            res.redirect('/noticias')
        }
    })
}
