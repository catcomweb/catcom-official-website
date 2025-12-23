import{getJoinSCCServices as getJoinSCC, createJoinSCCServices as createJoinSCC, deleteJoinSCCServices as deleteJoinSCC}from"../services/joinscc.services.js";

export const getJoinSCCControllers=async(req,res)=>{
    try{const joinscc=await getJoinSCC();
        res.status(200).json(joinscc);
    }
    catch(error){res.status(500).json({message:error.message});
}
};
export const createJoinSCCControllers=async(req,res)=>{
    try{
        const joinscc=await createJoinSCC(req.body);
        res.status(201).json(joinscc);
    }
    catch(error){res.status(500).json({message:error.message});
}
};
export const deleteJoinSCCControllers=async(req,res)=>{
    try{
        const{id}=req.params;
        await deleteJoinSCC(id);
        res.status(204).json();
    }catch(error){
        res.status(500).json({message:error.message});
    }
};