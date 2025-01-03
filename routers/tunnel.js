const router = require("express").Router();
const Tunnel = require("../model/Tunnel")

router.post("/", async (req, res) => {
    const { container_name, tunnel_id, port } = req.body;

    // Validate request data
    if (!container_name || !tunnel_id || !port) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const tunnelInfo = new Tunnel({
            container: container_name,
            tunnelId: tunnel_id,
            port: port,
        });
        const savedTunnelInfo = await tunnelInfo.save();
        res.status(201).json({ message: "Entry added", tunnelInfo: savedTunnelInfo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});
router.get("/:name/:application",async(req,res)=>{
    const containerName = req.params.name
    try {
        const tunnelInfo = await Tunnel.findOne({container:containerName})
        if(tunnelInfo){
            res.status(201).json({message:"Found",tunnelInfo:tunnelInfo});
        }
    } catch (error) {
        res.status(404).json(error)
    }
    
})

module.exports = router;