const userServices=require('../services/userServices')


 exports.createUser=async(req,res)=>{
    try
    {  
        const checkUserExist=await this.userServices.checkUser(req.Email,req.mobileNumber)
        if(checkUserExist){
           return res.status(400).json({
                message:`user with ${req.email} or ${req.mobile} already exist`
            })}

            let role = await this.userService.checkRole(req.role);
            if (!role) {
                role = new Role({
                    name: req.role,
                    permissions: req.permissions || ['read', 'write']
                });
                await role.save();
            }

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



    // Service
const userService = {
    createUser: async (userData) => {
        let role = await Role.findOne({ name: userData.role });
        if (!role) {
            role = new Role({
                name: userData.role,
                permissions: userData.permissions || ['read', 'write']
            });
            await role.save();
        }
        userData.role = role._id;
        const user = new User(userData);
        return await user.save();
    },
    getUsers: async () => {
        return await User.find().populate('role');
    }
};


}