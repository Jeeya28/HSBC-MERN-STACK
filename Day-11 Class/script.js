const fs = require("fs");

// fs.writeFile("sample.txt", "This is sample file", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });


// fs.readFile("sample.txt",{encoding:'utf-8'},(err, data)=>{
//     try {
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// })


fs.appendFile('sample.txt','\n hey this is new data i am inserting using append method',()=>{
    console.log("data is added successfully");
    
})


// console.log("Hello every one");
// let a = 10;
// console.log(a);
