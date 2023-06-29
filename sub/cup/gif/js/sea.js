let c=require("./cnf")
    ,cl=require("./cl")
	,a2=process.argv[2]
	,op={format:"jpg",resource_type:"image",max_results:10}
	,cb=function(e,r){let res=r.resources
		,le=res.length,uar=[]

for(j=0;j<le;j++){uar.push(res[j].url)
cl(uar[j])

}

}

c.api.resources(op,cb )


