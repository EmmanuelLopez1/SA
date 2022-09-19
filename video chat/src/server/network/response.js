exports.success = (req, res, user)=>{
    console.log("todo fue bien")
    if(user.message !== undefined || user.status !== undefined){
        res.status(user.status).send({
            ...user,
            error:"",
            message:user.message
        })
    }else{
        res.status(200).send({
            ...user,
            error:"",
            message:"Operacion realizada con exito"
        })
    }
}

exports.error = (req, res, err)=>{
    console.log("ocurrio un error")
    if(err.message !== undefined && err.status !== undefined){
        return res.status(err.status).send({
            error:err.message,
            message:""
        })
    }
        res.status(500).send({
            error:err || "Ocurrio un error al crear el usuario",
            message:""
        })
    

}