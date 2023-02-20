const fs = require("fs");

// fs.mkdir('thapa',function(){
//     console.log("folder created");
// });

// fs.writeFile('thapa/demo.txt','hello prathamesh',function(){
//     console.log("file created");
// })

// fs.appendFile('thapa/demo.txt','how are you ',function(){
//     console.log("file modified");
// })

// fs.readFile('thapa/demo.txt',function(err,data){
//     console.log('file read');
//     console.log(err);
//     console.log(data);+
// })


// fs.readFile('thapa/demo.txt','utf-8',function(err,data){
//         console.log('file read2');
//     console.log(err);
//     console.log(data);
//     })

// fs.rename("thapa/demo.txt","thapa/mybio.txt",function(){
//     console.log("file modified");
// })

fs.unlink("thapa/mybio.txt",function(){
    console.log('file deleted');
})

// fs.rmdir("thapa",function(){
//     console.log("folder deleted");
// })