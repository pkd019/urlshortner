const shortid = require("shortid");
const url  = require("../models/url.model")
async function generateNewShortUrl (req,res){
    const body = req.body;
    if(!body.url){res.status(400).json({error:"valid url nidded"})}
    const shortId = shortid.generate();
    await url.create(
        {
            shorturl:shortId,
            redirecturl:body.url,
            visitedhistory:[]
        }
    );

    return res.json({id:shortId});
};

async function getUpdatedurl (req,res){
    const shorturl=req.params.shorturl;
    const entry = await url.findOneAndUpdate({
       shorturl:shorturl
    },{
       $push:{
           visitedhistory:{timestamps:Date.now()}    }
    });
    res.redirect(entry.redirecturl);
   
    }

module.exports ={
    generateNewShortUrl,
    getUpdatedurl
}