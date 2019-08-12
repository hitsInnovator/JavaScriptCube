// Array functions
// All are belows functions are prototype

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
// Description: Add item into an Array
data.push ("Apple");
data.push ("Banana");
data.push ("Cat");
console.log ("push:", data, data.length);

// Pop
// Description: Remove last item from an array
data.pop ();
console.log ("pop:", data, data.length);

// shift
// Description: Removes the first item from an array
reset ();
data.shift ();
console.log ("shift:", data, data.length);

// unshift
// Description: Add new items into very first position of the an array
// and method return total length of the array
data.unshift ("A", "B");
console.log ("unShift:", data, data.length);

// filter
// Description: To filter items from an array this method
// can be use. any Array is a return type of this
// method
reset ();
var result = data.filter (function (item) {
    return item === "Apple";
});
console.log ("filter:", result, result.length);

// each
// Description: 

// every
// Description: This method check every item
// in array and if condition is valid then it
// return boolean. 
var result = data.every (function (item) {
    return item.length > 0;
});
console.log ("every:", result);

// find
// Description: This method identify the condition
// and return an item from the array
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
// Description: This method returns a shallow copy of a portion
// of any array into a new array object selected from begin to end
// The original array will not be modified.
reset ();
var result = data.slice (0, 1);
console.log ("slice:", result, result.length);

// splice
// Description: This method changes the contents of an array by
// removing or replacing existing items and/or adding new items.
// The original array will be modified.
// parameters: startIndex, deleteCount, items[]
reset ();
var result = data.splice (0, 0);
console.log ("splice:", result, result.length);

// some
// Description: 