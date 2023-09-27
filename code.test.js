const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {
        //I've added a loop that checks to make sure that array[0] is less than array[1] and so on to the end of the array
        for(let i = 0; i < arr.length; i++) {
            let i2 = i + 1;
            if((arr[i2] - arr[i]) < 0) { return false }
        }
        
        if(arr.length > 0) {
            return binarySearch(arr, arr[0]) === 0;
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });

jsc.assert(testSearch);
