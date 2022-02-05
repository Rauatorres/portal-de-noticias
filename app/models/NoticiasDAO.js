function NoticiasDAO(con){
    this._con = con
    return this
}

NoticiasDAO.prototype.getNoticias = function(callback){
    // this._con.query('select * from noticias', callback)
    this._con.query('select * from noticias order by data_criacao desc', callback)
}
NoticiasDAO.prototype.getNoticia = function(idnoticia, callback){
    this._con.query('select * from noticias where id = ?', idnoticia, callback)
}
NoticiasDAO.prototype.addNoticia = function(values, callback){
    this._con.query('insert into noticias set ? ', values, callback)
}

module.exports = NoticiasDAO