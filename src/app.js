const express= require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const bodyParser=require('body-parser')

dotenv.config()

const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use('api/v1/user',userRoutes)




module.exports=app