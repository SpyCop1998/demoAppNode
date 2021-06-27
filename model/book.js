const mongoose=require('mongoose')

var Book=mongoose.model('Books',{
    title:{
        type:String,
        require:true
    },

    category:{
        type:String,
        require:true
    },

    author:{
        type:String,
        require:true
    },


    noOfPage:{
        type:Number,
        require:true
    }

})

module.exports=Book

