let c=require("./cnf")
    ,cl=require("./cl")
	,cb=r=>{let src=r.resources
	,le=src.length
		cl(le)
for(j=0;j<le;j++)cl(src[j].url)
	}

c.search
	.expression("p5/ani")
	.max_results(100)
	.execute().then( cb	)
