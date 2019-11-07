 let expres = require('express');
let ta = expres();
let fs = require("fs");
let port =3000;
let tar;
// var am = tar.find

fs.readFile('./students.json' , 'utf8' , (error , data)=>{
    if(error) {
        console.log("error")
    }else{
       tar = JSON.parse(data)
       
    }
    console.log(tar)    
})  
let pageSize=5;
ta.get('/students' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.query.page;
    let start = (page-1)*pageSize;
    let end = start + pageSize;
    res.send({
       students : tar.slice(start,end)
    });
});
ta.listen(port , ()=>{
    console.log("ammar run . . . !")
});
// ta.get('/students/id' , (req , res)=>{
//     res.append('Access-Control-Allow-Origin', '*');
//     res.append('Access-Control-Allow-Headers', '*');
//     let id = req.query.id;
//     let start = (page-1)*pageSize;
//     let end = start + pageSize;
//     array.findfunctioncurrentValue, index, arr
//     res.send({
//        students : tar.slice(start,end)
//     });
// });
// ta.listen(port , ()=>{
//     console.log("ammar run . . . !")
// });
