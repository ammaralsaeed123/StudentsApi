 let expres = require('express');
let exp = expres();
let fs = require("fs");
let port =4000;
let tar=[];
// var am = tar.find

fs.readFile(__dirname+'/students.txt' , 'utf8' , (error , data)=>{
    if(error) {
        console.log("error")
    }else{
       tar = JSON.parse(data)
       console.log(tar)    
    }
})  
let pageSize=5;
exp.get('/students/:id' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.url.split("/")[2];
    let start = (page-1)*pageSize;
    let end = start + pageSize;
    res.send(tar.slice(start,end));
});
exp.listen(port , ()=>{
    console.log("ammar run . . . !")
});

// exp.get('/students/:id' , (req , res)=>{
//     res.append('Access-Control-Allow-Origin', '*');
//     res.append('Access-Control-Allow-Headers', '*');
//     let id1 = req.url.split("/")[2];
//     let arr = tar.find(x => x.id == id1);
//     res.send(arr);
//     console.log(arr);
// });
module.exports = exp;