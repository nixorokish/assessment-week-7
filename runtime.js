const perf = require('execution-time')();
let br = "--------------------"

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given 
// array? 
console.log(br)
console.log(br)

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let appendXL = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let insertXL = perf.stop();

console.log("insert XL", insertXL.preciseWords);
console.log("append XL", appendXL.preciseWords);
console.log(br)

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let appendL = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(largeArray);
let insertL = perf.stop();

console.log("insert L", insertL.preciseWords);
console.log("append L", appendL.preciseWords);
console.log(br)

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let appendM = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(mediumArray);
let insertM = perf.stop();

console.log("insert M", insertM.preciseWords);
console.log("append M", appendM.preciseWords);
console.log(br)

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let appendS = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(smallArray);
let insertS = perf.stop();

console.log("insert S", insertS.preciseWords);
console.log("append S", appendS.preciseWords);
console.log(br)

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let appendXS = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let insertXS = perf.stop();

console.log("insert XS", insertXS.preciseWords);
console.log("append XS", appendXS.preciseWords);
console.log(br)

console.log(br)

console.log(`Appending is much faster in execution time than inserting. Inserting is slower because it has to change the index of every item in the array when it inserts a new item.`)