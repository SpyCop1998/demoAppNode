var Book=require('../model/book')

exports.createBook=(req,res)=>{

    console.log('Debug')

    var newBook={
        title:req.body.title,
        category:req.body.category,
        author:req.body.author,
        noOfPage:req.body.noOfPage
    }

    var book = new Book(newBook)

    book.save().then(data=>{

        res.send({
            message:"Books saved"
        })

    }).catch(err=>{

        res.send({
            message:"error"+err.message
        })

    })
}

exports.getBook=(req,res)=>{

    Book.find().then(book=>{

        res.send({
            message:"Books",
            data:book
        })

    }).catch(err=>{

        res.send({
            message:"error"+err.message
        })
    })
}