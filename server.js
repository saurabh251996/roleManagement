const express=require('express')
const app=express()

const port=process.env.port || 3000

const db=require('./src/config/db')

app.listen(port,()=>{
    console.log(`app successfully listen on this ${port}`)
})
