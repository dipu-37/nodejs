const fs = require("fs");

//read file text synchronous

// const readText = fs.readFileSync('./texts/read.txt', 'utf-8');
// console.log(readText);

// read text asynchronous

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw err;
    }
  });
});

// write text asynchronous

// fs.writeFile('./texts/read2.txt',data, 'utf-8', (err)=>{
//     if(err){
//         throw err;
//     }
// })

console.log("testing asynchronous");
