let cld=require("cloudinary").v2
,cl=require("./cl")
    ,op={use_filename:true,unique_filename:false,folder:"iib",resource_type:"video"}
    ,cb=(e,r)=>cl(e,r)

cld.config({
  cloud_name: "g0urmate",
  api_key: "635755183776325",
  api_secret:"2LaQZTa1lMHDoV5GuTJr5Z0OXCM",
});

module.exports=cld


