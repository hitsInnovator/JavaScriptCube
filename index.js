// Array functions

// Define variable
var data = [];

// Reset Array 
function reset () {
    data = [];
    data.push ("Apple");
    data.push ("Banana");
    data.push ("Cat");
}

// Push
// Description: 
data.push ("Apple");
data.push ("Banana");
data.push ("Cat");
console.log ("push:", data, data.length);

// Pop
// Description: 
data.pop ();
console.log ("pop:", data, data.length);

// shift
// Description: 
reset ();
data.shift ();
console.log ("shift:", data, data.length);

// unshift
// Description: 
data.unshift ("Apple");
console.log ("unShift:", data, data.length);

// filter
// Description: 
reset ();
var result = data.filter (function (item) {
    return item === "Apple";
});
console.log ("filter:", result, result.length);

// each
// Description: 

// every
// Description: 
var result = data.every (function (item) {
    return item.length > 0;
});
console.log ("every:", result);

// find
// Description: 
var result = data.find (function (item) {
    return item === "Apple";
});
console.log ("find:", result, result.length);

// map
// Description: 
var result = data.map (function (item) {
    return item + " ** ";
});
console.log ("map:", result, result.length);

// reduce
// Description: 

// reduceRight
// Description: 

// sort
// Description: 


// slice
// Description:  
reset ();
var result = data.slice (0, 1);
console.log ("slice:", result, result.length);

// splice
// Description: 
reset ();
var result = data.splice (0, 1);
console.log ("slice:", result, result.length);

// some
// Description: 