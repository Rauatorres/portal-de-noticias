const app = require('./config/server')

app.listen(3000, function(){
    console.log('Successfully started server! Listening on http://localhost:3000 ...')
})