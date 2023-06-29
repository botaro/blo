let cld=require("cloudinary").v2
,cl=require("cns")
,cb=(e,r)=>cl(e,r)

cld.config({
  cloud_name: "nakasub",
  api_key: "195649455614578",
  api_secret:"_krrtgnJfa72_83wNtZ4SFLTV4c"
});

module.exports=cld


