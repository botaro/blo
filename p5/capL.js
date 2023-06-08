let fd=new FormData()
,fr=new FileReader()

let Cap= function(nam){
this.nam=nam
// this.fmt="png"
this.fmt="webm"
let op={ format: this.fmt, framerate: 30,name:this.nam}
this.cap = new CCapture(op)
}

Cap.prototype.dis=function(){
ini.fc===1 &&this.cap.start()
    cl("cap st")
this.cap.capture(document.getElementById('defaultCanvas0'))

if (frameCount>100) {
this.cap.stop()
this.cap.save()

// bl=>{cl(bl)
// fr.readAsDataURL(bl)
// fr.onload=()=>{
// fd.append("tar",fr.result)
// let op={url:"ani-"+vusr+"-"+vprj+"-"+vpag+"-"+vfrm+"-"+vmov
// ,data:fd,method:"post",encType:"mulitpart/form-data"}
// axios(op)}
// })//save

noLoop()
print("cap fin")
}//if

}//dis

