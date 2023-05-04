
//let sel=a=> document.querySelector(a)
let cl=a=> console.log(a)
,crE=id=> document.createElement(id)

let crT=a=> document.createTextNode(a)
,gId=id=> document.getElementById(id)
,gCl=n=> document.getElementsByClassName(n)
,gTn=id=> document.getElementsByTagName(id)
,inH=(e,a)=> e.innerHTML=a
,clA=(e,a)=> e.classList.add(a)
,clR=(e,a)=> e.classList.remove(a)
,stA=(e,a,b)=> e.setAttribute(a,b)
,dtS=(e,a,b)=> e.dataset.a=b
,apC=(e,a)=> e.appendChild(a)
,rmC=(e,a)=> e.removeChild(a)

let adC=(e,f)=>e.addEventListener("click",f)
,adS=(e,f)=>e.addEventListener("submit",f)
,adR=fun=>e.addEventListener("scroll",fun)


