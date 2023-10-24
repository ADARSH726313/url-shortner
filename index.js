 const express = require("express");

 const app = express();

 const ShortUrl = require("./models/url")

 const mongoose = require("mongoose");
 
 const user = "mongodb+srv://adu:adsadt@cluster1.i7xzqtp.mongodb.net/adsadt"
 mongoose.connect(user)
 .then(()=>console.log("database is fine and running"))
.catch((err)=> " u have an error in database")
/// view engine ejs is used tto acess the file in views
 app.set("view engine",'ejs');
 app.use(express.urlencoded({extended:false}))

 app.get("/",async (req,resp)=>{

 const shortUrls =  await ShortUrl.find()

    resp.render('index',{shortUrls:shortUrls})
 })

 app.post("/shortUrls",async (req,resp)=>{

  await ShortUrl.create({ full: req.body.FullUrl})


   resp.redirect("/")

 })

 app.get("/:shortUrl",async (req,resp)=>{

  const url =  await ShortUrl.findOne({short : req.params.shortUrl}) ;

  if(url==null){

   resp.status(404).send("u made an error");
  }
  else {
   url.clicks++;
   url.save()
   resp.redirect(url.full)
  }
 })
 app.listen(2000);