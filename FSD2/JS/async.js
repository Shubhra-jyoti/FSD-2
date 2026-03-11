// // function disp(){
// //     setTimeout(()=>{
// //         console.log("I am being dislayed after 5 seconds")
// //     },5000)
// // }
// // disp()

// // setInterval(()=>{
// //         console.log("I am being dislayed after  every 5 seconds")
// //     },5000)

// // function ut(){
// //     const time=new Date().toLocaleTimeString()
// //     console.log(time)
// // }
// // ut()
// // setInterval(ut,1000)

function main(cb){
    console.log("operation 1")
    setTimeout(()=>{cb("operation end")},2000)
console.log("operation 2")
}

function fun(result){
    console.log("final anser",result)
}
main(fun)


// setTimeout(()=>{document.getElementById("p1").innerText="dISPLAYED AFTER 2 SECONDS"},2000)





