const app=require('app')

const port=process.env.port || 3000

const db=require('./config/db')

app.listen(port,()=>{
    console.log(`app successfully listen on this ${port}`)
})
