const mongoose= require('mongoose')

const userSchema=mongoose.Schema({

    name:{ type:String,require:true },
    email:{type:String,require:true},
    mobile:{type:Number,require:true},
    country:{type:String,require:true},
    password:{type:String,required:true},
},

    {
        timestamps: true
    }
)

const user=mongoose.model('user',userSchema)
module.exports(user)