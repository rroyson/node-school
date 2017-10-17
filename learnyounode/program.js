

///////////////
////Exercise 1
///////////////

//console.log('HELLO WORLD')

///////////////
////Exercise 2
///////////////

// function add(x, y) {return x + y}
// 
// 
// console.log(process.argv.slice(2).map(Number).reduce(add))


//Official Solution


// var result = 0
// 
//   for (var i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i])
//   }
// 
//   console.log(result)


///////////////
////Exercise 3
///////////////

var fs = require('fs')
var buf = fs.readFileSync(process.argv[2]).toString().split('\n').length-1

console.log(buf)


