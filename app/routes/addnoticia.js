module.exports = function(application){
    application.get('/addnoticia', function(req, res){
        application.app.controllers.addnoticia.getAddnoticia(application, req, res)
    })
    
    application.post('/request', function(req, res){
        application.app.controllers.addnoticia.getRequest(application, req, res)
    })
} 
