const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var testGraph1 = [3,5,9,3,4,6,7,2,1,8,3,3,5,2,3,9];
var result = mergeCall(testGraph1);
jsc.assert(JSON.stringify(result) == JSON.stringify([1,2,2,3,3,3,3,3,4,5,5,6,7,8,9,9]));
