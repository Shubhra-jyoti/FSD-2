const student = [

{

name: "ABC", height: 5.7

},

{

name: "PQR", height: 6.0

},

{

name: "XYZ", height: 6.2

}

]
student.sort((a,b)=>b.height-a.height)
for (let i of student){
    console.log(i.name)
}

const a = {

"A" : "LJU",

"B" : ["CSE", "IT" , "CE"],

"C" : [

{

"D" : "Hi",

"E" : ['are', 4, {'F' : ['semester', 'We']} ]

}

],

"G" : {

"H" : "students",

"I" : ["of","!"]

},

"J" : [{"K" :"Python", "L":"branch"},"FSD-2"]

}
console.log(`${a.C[0].D} ${a.C[0].E[2].F[1]} ${a.C[0].E[0]} ${a.G.H} ${a.G.I[0]} ${a.C[0].E[2].F[0]} ${a.C[0].E[1]} ${a.G.I[0]} ${a.B[0]} ${a.J[0].L}`)
let x=`${a.C[0].D}${a.G.I[1]} ${a.C[0].E[2].F[1]} ${a.C[0].E[0]} ${a.G.H} ${a.G.I[0]} ${a.C[0].E[2].F[0]} ${a.C[0].E[1]} ${a.G.I[0]} ${a.B[0]} ${a.J[0].L}`
document.getElementById("p1").innerHTML=x

const b = {"Name" : "Ramesh",

        	"Subects" : ["Maths", "Scence" , "chemistry"],

        	"Grade" : {"Type" : "marks","Total" : [88,90,99,87]},

        	"Range" : {"opt" : "100", "type" : ["secure","subject","class"]},

        	"achive" : [{"Rank" :"rank", "place":[1,2,3]}, {"Ordinalindicator":"st"},"12"],

        	"joints" : ['outof','got','and']

      	}
        console.log(`${b.Name} ${b.joints[1]} ${b.Grade.Total[2]} ${b.joints[0]} ${b.Range.opt} ${b.Grade.Type} ${b.joints[2]} ${b.Range.type[0]} ${b.achive[0].place[0]}${b.achive[1].Ordinalindicator} ${b.achive[0].Rank}` )

        const sub = {

  FSD: [

    { Topic: "HTML", course: "Beginner", content: ["tags","table","form"] },

    { Topic: "CSS", course: "Beginner", content: ["tags","table","form"] }

  ]

};
rw=2

for(let i of sub.FSD){
   
        console.log("r"+rw)
        let r=document.getElementsByClassName("r"+rw)
        console.log(r[0])
        r[0].innerHTML=i["Topic"]
        r[1].innerHTML=i["course"]
        r[2].innerHTML=i.content.join(",")
    
    rw++
}

