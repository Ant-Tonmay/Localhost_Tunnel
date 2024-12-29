import { Schema, model } from "mongoose"

const tunnelSchema = Schema({
    container:{
        type: String,
        required : true
    },
    tunnelId:{
        type: String,
        required: true
    }
})
export default model("Tunnel",tunnelSchema)