const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema(
    
    {
        shorturl:{
            type:String,
            required:true,
            unique:true
        },
        redirecturl:{
            type:String,
            required:true
        },
        visitedhistory:[{
            timestamps:{type:Number}
        }]
     
    }
    ,{timestamps:true}
);

const url = mongoose.model("url",urlSchema);

module.exports =url;