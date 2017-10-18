

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

// var fs = require('fs')
// var buf = fs.readFileSync(process.argv[2]).toString().split('\n').length-1
// 
// 
// 
// console.log(callback(err, buf))

///////////////
////Exercise 4
///////////////

var fs = require('fs')
var buf = process.argv[2]

fs.readFile(buf, function (err, data) {
  var lines = data.toString().split('\n').length - 1
  if(err){
    return err
  } else {
    console.log(lines)
  }
})


//Official Solution
// var fs = require('fs')
//  var file = process.argv[2]
// 
//  fs.readFile(file, function (err, contents) {
//    if (err) {
//      return console.log(err)
//    }
//    // fs.readFile(file, 'utf8', callback) can also be used
//    var lines = contents.toString().split('\n').length - 1
//    console.log(lines)
//  })

