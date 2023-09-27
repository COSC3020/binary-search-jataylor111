const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {
        //I've replaced that loop with a small insertion sort loop just to ensure it's sorted
        for(var i = 0; i < arr.length; i++) {
            var val = arr[i];
            var j;
            for(j = i; j > 0 && arr[j-1] > val; j--) {
                arr[j] = arr[j-1];
            }
            arr[j] = val;
        }

        if(arr.length > 0) {
            return binarySearch(arr, arr[0]) === 0;
        } else {
            return binarySearch(arr, "foo") === -1;
        }
        
    });

jsc.assert(testSearch);
