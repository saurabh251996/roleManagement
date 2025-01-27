const userServices=require('../services/userServices')


 exports.createUser=async(req,res)=>{
    try
    {  
        const checkUserExist=await this.userServices.checkUser(req.Email,req.mobileNumber)
        if(checkUserExist){
           return res.status(400).json({
                message:`user with ${req.email} or ${req.mobile} already exist`
            })}

       const response= await this.userServices(req.body)
       if(!response){
        return res.status(401).json({
            message:'unable to create user'
        })
       }
       res.status(200).json({
        status:true,
        date:response
       })

    }
    catch(error){
        console.error(`unable to create user:${error.message}`)
    }



}