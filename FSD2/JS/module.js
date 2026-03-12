/*
write file
readfile
appendfile
rename
unlink
mkdir
rmdir
copyFile
 */

 let fs=require("fs")//filesystem
// // fs.writeFileSync("helo.txt","hi how are you")

// //readFileSync(filename,option(usually encoding))

// x=fs.readFileSync("helo.txt")
// console.log(x.toString())//returns buffer by default
// console.log("file ended")

// fs.mkdirSync("B1")
// fs.writeFileSync("B1/lec2.txt","module")
// var data=fs.readFileSync("B1/lec2.txt","utf-8")
// console.log(data)
// fs.renameSync("B1/lec2.txt","B1/lec3.txt")


// fs.unlinkSync("B1/lec3.txt") remove file 
fs.writeFile("data.txt","Async",function(err){
    if(err){
        console.log("this",err)
    }
    else{
        console.log("file operation completed")
    }
})

fs.readFile("data.txt",function(err,data){
    if(err){
        console.log("this",err)
    }
    else{
        console.log(data.toString())
    }
})
console.log("programme ended")
