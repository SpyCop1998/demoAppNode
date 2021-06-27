module.exports=(app)=>{

    var book=require('../controller/book.controller')
    app.post('/createBook',book.createBook)
    app.post('/getBook',book.getBook)

}