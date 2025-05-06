function mergeCall(arr, int) {
    //if (arr.length == 0 || arr.length == 1) {return;}
    mergeSort(arr, console.log, int);
}


function mergeSort(arr, cb, int) {
    var Parallel = require('paralleljs'),     
        p = new Parallel(arr); 

    p.map(function(i) { return [i];})

    .reduce(function(d) {

        var finArr = new Array(d[0].length + d[1].length);  // the merging of the two arrays, make array to put values into to return
        var i = 0; 
        var j = 0;                              // will use to iterate through each array, i for first and j for second
        var k = 0;                              // k will iterate through the final array
        while (i < d[0].length && j < d[1].length) {        // while both halves can be iterated through still
            if (d[0][i] <= d[1][j]) {           // if current value in first array <= current val in second array (comes first in sorted)
                finArr[k] = d[0][i];            // put value into array to return
                i++;
            }
            else {                               // if current value in second array is lesser
                finArr[k] = d[1][j];             // put value into array to return
                j++;                            
            }
            k++;                                 // go to next spot in array to return
        }

        while (i < d[0].length) {                // leftover values in the first array
            finArr[k] = d[0][i];                 // put into array to return
            i++;
            k++;
        }

        while (j < d[1].length) {                // leftover values in the second array
            finArr[k] = d[1][j];                 // put into array to return
            j++;
            k++;
        }
        
        return finArr;                           // return array
    
    })

    //.then(cb); //callback


    .then(function(cb) {
        if (int == 1) {jsc.assert(JSON.stringify(cb) == JSON.stringify([1,2,2,3,3,3,3,3,4,5,5,6,7,8,9,9]));}
        if (int == 2) {jsc.assert(JSON.stringify(cb) == JSON.stringify([]));}
        if (int == 3) {jsc.assert(JSON.stringify(cb) == JSON.stringify([10]));}
        
        return cb;
      }); //callback
}

var arr1 = [3,5,9,3,4,6,7,2,1,8,3,3,5,2,3,9];

var arr2 = [];

var arr3 = [10];

async function run() {
    await mergeCall(arr1, 1);
    await mergeCall(arr2, 2);
    await mergeCall(arr3, 3);
}
  
run();
