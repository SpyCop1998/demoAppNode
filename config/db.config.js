var mongoose=require('mongoose')
var Connection = () =>{
    mongoose.connect('mongodb://localhost:27017/DemoAppSaurabh',()=>{
    console.log('DB connected')
})
}

module.exports=Connection