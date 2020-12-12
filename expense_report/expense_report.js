const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const instream = fs.createReadStream('expense_data.txt');
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);
var expenseArray = [];

rl.on('line', function(line){
  expenseArray.push(line);
});

rl.on('close', function(){
  for(let i = 0; i <= expenseArray.length; i++){
    for(let j = 1; j <= expenseArray.length; j++){
      if((parseInt(expenseArray[i]) + parseInt(expenseArray[j])) == 2020){
        console.log(expenseArray[i] * expenseArray[j]);
      }
    }
  }
});


