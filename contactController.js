const getcontact =((req,res)=>{
    res.status(200).json({message:"get all contacts"});
});

const createcontact = ((req,res)=>{
    res.status(200).json({message:"add a contact"});
});

const getacontact = ((req,res)=>{
    res.status(200).json({message:"get a contact"});
});

const updatecontact = ((req,res)=>{
    res.status(200).json({message:"update  contact"});
});

const deletecontact = ((req,res)=>{
    res.status(200).json({message:"delete contact"});
});

module.exports = {getcontact,getacontact,createcontact,updatecontact,deletecontact};