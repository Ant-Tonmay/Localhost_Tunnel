const router = require("express").Router();
const Tunnel = require("../model/Tunnel")

router.post("/add",async (req,res)=>{
    const containerName = req.body.container_name;
    const tunnelId = req.body.tunnel_id;
    try {
        const tunnelInfo = new Tunnel({
            container:containerName,
            tunnel:tunnelId
        })
        const savedTunnelInfo = await tunnelInfo.saved()
        res.status(201).json({message:"Entry Added",tunnelInfo:savedTunnelInfo});
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

router.get("/get",async(req,res)=>{
    containerName = req.params.name
    try {
        const tunnelInfo = await Tunnel.findOne({container:containerName})
        if(tunnelInfo){
            res.status(201).json({message:"Found",tunnelInfo:tunnelInfo});
        }
    } catch (error) {
        res.status(404).json(error)
    }
    
})