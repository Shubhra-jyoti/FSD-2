// // // // // // var Eventemitter=require('events')
// // // // // // var ee=new Eventemitter()
// // // // // // //first we should use on method to listen the event and then we can emit the event
// // // // // // //also we can use event.addListener() method to listen the event but it is not recommended because it is old and it is not used in modern javascript 
// // // // // // //also we can use event.once() method to listen the event but it will listen the event only once and then it will remove the listener
// // // // // // ee.on("mrgfunction",()=>{
// // // // // //     console.log("om shanti")
// // // // // // })

// // // // // // ee.emit("mrgfunction")
// // // // // // //e.removeListener() method is used to remove the listener but it is not recommended because it is old and it is not used in modern javascript
// // // // // // //we have removeAllListeners() method to remove all the listeners but it is not recommended because it is old and it is not used in modern javascript
// // // // // // //.listnerCount() is used to count the number of listeners for a particular event but it is not recommended because it is old and it is not used in modern javascript


// // // // // // function photographer(){
// // // // // //     console.log("clicking the photo")
// // // // // // }
// // // // // // function dj(){
// // // // // //     console.log("playing the music")
// // // // // // }
// // // // // // function caterer(){
// // // // // //     console.log("serving the food")
// // // // // // }
// // // // // // function bridegroom(){
// // // // // //     console.log("marriage is going on")
// // // // // // }
// // // // // // ee.addListener("marriage",photographer)
// // // // // // ee.addListener("marriage",dj)
// // // // // // ee.addListener("marriage",caterer)
// // // // // // ee.addListener("marriage",bridegroom)
// // // // // // console.log("check me")
// // // // // // ee.emit("marriage")
// // // // // // console.log("thank you")

// // // // // //task 1

// // // // // // eventem=require('events')
// // // // // // ee= new eventem()
// // // // // // ee.on("data_received",()=>{
// // // // // //     console.log("data is received successfully")
// // // // // // })
// // // // // // ee.on("connection",()=>{
// // // // // //     console.log("connection is successful")
// // // // // //     ee.emit("data_received")
// // // // // // })("check")
// // // // // // let d=ee.listenerCount("check")
// // // // // // console.log(d)
// // // // // // ee.em
// // // // // // ee.emit("connection")
// // // // // // console.log("thanks")

// // // // // // var eventemitter=require('events')
// // // // // // var ee=new eventemitter()
// // // // // // ee.on("status",(code,type)=>{
// // // // // //     console.log(`the status code is ${code} and the status type is ${type}`)
// // // // // // })
// // // // // // ee.emit("status",200,"success")

// // // // // //task 2

// // // // // e=require('events')
// // // // // ee=new e()
// // // // // let l1=function(){
// // // // //     console.log("first listener")
// // // // // }
// // // // // let l2=function(){
// // // // //     console.log("second listener")
// // // // // }
// // // // // ee.addListener("check",l1)
// // // // // ee.on("check",l2)
// // // // // ee.emit("check")
// // // // // console.log("******")
// // // // // ee.removeListener("check",l1)
// // // // // ee.emit("check")
// // // // // let d=ee.listenerCount("check")
// // // // // console.log(d)

// // // // //task 3

// // // // e=require('events')
// // // // ee=new e()
// // // // ee.on("pericircle",(r)=>{
// // // //     if(r<0){
// // // //         console.log("radius should be psitive")
// // // //     }
// // // //     else{
// // // //         let p=2*3.14*r
// // // //         console.log(`the perimeter of the circle is ${p}`)
// // // //     }
// // // // })
// // // // ee.on("perisquare",(s)=>{
// // // //     if(s<0){
// // // //         console.log("radius should be psitive")
// // // //     }
// // // //     else{
// // // //         let a=4*s
// // // //         console.log(`the peri of the square is ${a}`)
// // // //     }
// // // // })
// // // // ee.emit("pericircle",5)
// // // // ee.emit("perisquare",5)
    
// // // e=require ('events')
// // // fs=require('fs')
// // // ee=new e()
// // // ee.on("create",()=>{
// // //     fs.writeFile("abc.txt","write done",(err)=>{
// // //         if(err){
// // //             console.log(err)

// // //         }
// // //         else{
// // //             console.log("file is created")
// // //             ee.emit("update")
// // //         }
// // //     })
// // // })
// // // ee.on("update",()=>{
// // //     fs.appendFile("abc.txt","this is data",(err)=>{
// // //         if(err){
// // //             console.log(err)
// // //         }
// // //         else{
// // //             console.log("file is updated")
// // //             ee.emit("read")
// // //         }
// // //     })
    
// // // })
// // // ee.on("read",()=>{
// // //     fs.readFile("abc.txt","utf-8",(err,data)=>{
// // //         if(err){
// // //             console.log(err)
// // //         }
// // //         else{
// // //             console.log("file is read")
// // //             console.log(data)
// // //             ee.emit("finish")
// // //         }           
// // // })
// // // })
// // // ee.on("finish",()=>{
// // //     console.log("all operations are done")
// // // })
// // // ee.emit("create")


// // //task 7
// // e=require('events')
// // ee=new e()
// // ee.on("calculate",(...a)=>{

// //     x=a.reduce((a,b)=>a+b)
// //     console.log(`the sum of the numbers is ${x}`)
// //     ee.emit("percentage",x)
// // })
// // ee.on("percentage",(x)=>{
// //     let p=(x/125)*100
// //     console.log(`the percentage is ${p}%`)
// // })
// // ee.emit("calculate",20,15,25,15,10)

// fs=require('fs')
// e=require('events')
// ee=new e()
// ee.on("mkdir",()=>{
//     fs.mkdirSync("myfolder")
//     console.log("folder is created")
//     ee.emit("writefile")
// })
// ee.on("writefile",()=>{
//     fs.writeFileSync("myfolder/abc.txt","this is data")
//     console.log("file is created and data is written")
//     ee.emit("appendfile")
// })
// ee.on("appendfile",()=>{
//     fs.appendFileSync("myfolder/abc.txt"," this is appended data")
//     console.log("data is appended")
//     ee.emit("readfile")
// })
// ee.on("readfile",()=>{
//     let data=fs.readFileSync("myfolder/abc.txt","utf-8")
//     console.log("file is read")
//     console.log(data)
//     ee.emit("copyfile")
// })
// ee.on("copyfile",()=>{
//     fs.copyFileSync("myfolder/abc.txt","myfolder/xyz.txt")
//     console.log("file is copied")
    
// })
// ee.emit("mkdir")


fs=require("fs")
fs.writeFileSync("a.txt",'text')
data=fs.readFileSync("a.txt")
console.log(JSON.parse(data))