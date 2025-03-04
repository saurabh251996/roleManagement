const user=require('../models/userModel')
const bcrypt=require('bcrypt')
const role=require('../models/roleModel')

const creatuser=async(userData)=>{
    try{
        
        
        let role = await role.findOne({ name: userData.role });
        if (!role) {
            role = new Role({
                name: userData.role,
                permissions: userData.permissions || ['read', 'write']
            });
            await role.save();

        }

        userData.role = role._id;
    

        const salt=bcrypt.genSalt(10)
        const bcryptPassword=await bcrypt.hash(userData.password,salt)


        const response=await new user(
            {
               name: userData.name,
               email:userData.email,
               mobile:userData.mobile,
               password:bcryptPassword,
               role:userData.role,
               country:userData.country
    
            }
        )
    
        await response.save()
        return response 

    }
    catch{
        console.error(`unable to create user:${error.message}`)
    }

  
}

const checkUser= async(mobile,email)=>{
    try{
        const response=await user.findOne({$or:[{mobile:mobile},{email:email}]})
        if(!response){
            throw new Error(`user with this ${email} or ${mobile} not exist`)
        }

        return response
    }
    catch(error){
        console.error(`unable to find data :${error.message}`)

    }
}

module.exports={
    creatuser,
    checkUser
}
