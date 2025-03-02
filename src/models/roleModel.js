const mongoose= require('mongoose')

const roleSchema= mongoose.Schema({
    role:{
        type:String,
        required:true,
        unique:true,
        enum: ['superAdmin', 'admin', 'user'] 
    },
    permissions:{
        type:[string],
        required: true, 
        enum: ['read', 'write', 'delete', 'update'],

    }
 })

const role= mongoose.model('Role',roleSchema)
