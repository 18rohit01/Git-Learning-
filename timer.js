function timer(){
// putting it i a function 
const obj =document.getElementById("root");
const now = new Date();
const indianTime = now.toLocaleTimeString();
obj.innerHTML = indianTime;
}
setInterval(timer,1000)


const account =230

// console.log("hii")