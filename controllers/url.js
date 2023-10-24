
const {shortid}= require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req,resp){
    const body = req.body;
    if(!body.url) return resp.status(404).json({error:"url is required"});

    
    const shortID =shortid()

    await URL.create({

        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[]

    })
    resp.json({id:shortID})
}
module.exports ={ handleGenerateNewShortURL,}