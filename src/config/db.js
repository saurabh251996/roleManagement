const mongoose=('mongoose')
const dotenv=require('dotenv')

mongoose.connect(process.env.MONGO_URI,
    {}).
 then(()=>{console.log('connected to db')})
.catch(()=>{console.log('failed to connected db')})

module.exports=mongoose