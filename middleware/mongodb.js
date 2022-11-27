
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Ayishu:ayishunizar@cluster0.xqscbar.mongodb.net/datasets?retryWrites=true&w=majority',{
useNewUrlParser:true,
useunifiedtopology:true
}).then(()=>{
    console.log("mongodb connected sucessfully")
}).catch((error)=>{
    console.log(error.msg)
})