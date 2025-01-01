const fs = require('fs')

//read file text

// const readText = fs.readFileSync('./texts/read.txt', 'utf-8');
// console.log(readText);

//asyanchronous 

fs.readFile('./texts/read.txt','utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})


// readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }); 