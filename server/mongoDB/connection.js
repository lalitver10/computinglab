const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/tits"
const mongoConnection=()=>{
  try {
    mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
    console.log("MongoDB Connected")
    
  } catch (error) {
    console.log("Error while connecting mongoDB")
  }
}
module.exports=mongoConnection