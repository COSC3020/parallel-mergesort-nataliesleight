const jsc = require('jsverify');

function mergeCall(arr) {
    // exists so user only has to put in array
    if (arr.length == 0 || arr.length == 1) {return arr;}
    mergeSort(arr, console.log);
}

function mergeSort(arr, cb) {
    // set up parallel
    var Parallel = require('paralleljs'),       // imports library
        p = new Parallel(arr); 

    // map: end of mergesort makes each item own array, do that while wrapping
    // would this be the recursive step? Can make each array item while processing
    p.map(function(i) { return [i];})

    // go through each array and add them together in sorted order
    // pretty much merge function of typical mergesort
    // note: merge is NOT recursive
    .reduce(function(d) {
        // d[0] = first array
        // d[1] = second array 
        // referenced vector addition code
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

    .then(function(cb) {
      jsc.assert(JSON.stringify(cb) == JSON.stringify([1,2,2,3,3,3,3,3,4,5,5,6,7,8,9,9]));
      return cb;
    }); //callback
}

var testGraph1 = [3,5,9,3,4,6,7,2,1,8,3,3,5,2,3,9];
mergeCall(testGraph1);
