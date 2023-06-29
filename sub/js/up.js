let c=require("./cnf")
    ,cl=require("cns")
    ,a2=process.argv[2]
    ,a3=process.argv[3]
    ,fl=a2+a3
,op={use_filename:true,unique_filename:false,folder:"cup/"+a2
,resource_type:"image"}
,cb=(e,r)=>cl(e,r)

if (a2 && a3){
cl(fl)

c.uploader.upload(fl,op, cb);

 }
