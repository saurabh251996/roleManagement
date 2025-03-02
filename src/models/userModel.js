const mongoose= require('mongoose')

const userSchema=mongoose.Schema({

    name:{ type:String,require:true },
    email:{type:String,require:true},
    mobile:{type:Number,require:true},
    country:{type:String,require:true},
    password:{type:String,required:true},
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true }, // Role Reference
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // Parent User Reference
    // internal:{
    //     type:Boolean
    // }

},

    {
        timestamps: true
    }
)

const user=mongoose.model('user',userSchema)
module.exports(user)