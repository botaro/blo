let c=require("./cnf")()
    ,cl=require("./cl")
    ,dir="/mnt/sdb1/mus/dem/iib/sum"
    ,fl=dir+"/mp3/1.mp3"
    ,op={resource_type:"video"}
    ,cb=function(e,r){cl(r.resources[0].url)
    }

    c.api.resources(op,cb )

