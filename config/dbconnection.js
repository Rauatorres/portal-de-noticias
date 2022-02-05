const mysql = require('mysql')

const con = function(){
    let connection = mysql.createConnection({
        host: "localhost",
        user: "raua",
        password: "123",
        database: "portaldenoticias"
    })
    console.log('Successfully connect to database portaldenoticias')
    return connection
}

module.exports = function(){
    return con
}