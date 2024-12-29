const mongoose = require("mongoose")

const tunnelSchema = mongoose.Schema({
    container:{
        type: String,
        required : true
    },
    tunnelId:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Tunnel",tunnelSchema)