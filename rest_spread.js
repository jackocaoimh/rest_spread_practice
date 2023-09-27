// ... 
// Rest: Collects multiple elements into an array.
//Spread: Spreads an iterable into individual elements.

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  const filterOutOdds = (...nums) => nums.filter(v => v % 2 === 0)



//---------------------------------------------------------------------------------------------------------------------------------------------

  findMin(1,4,12,-3) // -3
  findMin(1,-1) // -1
  findMin(3,1) // 1
//First instance of of ... is rest which allows for multiple arguments to be passed in 
//Second instance is spread which allows the Math.min to iterate over each individual element
  const findMin = (...args) => Math.min(...args)

//---------------------------------------------------------------------------------------------------------------------------------------------


  mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

  const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})


//---------------------------------------------------------------------------------------------------------------------------------------------


doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// accepts an array and a variable number of arguments so we use ...args (rest)
// Due to two arguments it is in parenthesis
// The function has to return a new array so the function is wrapped in [] as this is what will be returned
// ... arr used in function as it has to be spread into the new array 
// ...args.map returns a new array to the new array 
// *note there is an inner function attached to .map, uses a new variable name val, this allows the parts of args to be doubled
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]


//---------------------------------------------------------------------------------------------------------------------------------------------


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}

// In the arrow funtion there are multiple operations so you use {} and multiple lines
// set idx to a random number using Math.random which is rounded to a whole number using Math.floor
// * items.length ensures the random number chosen will be within the length of the array
// last line uses spread operator
// creates two new arrays first from the start of items up to but not including idx and then combines 
// it with the second array which includes the index after idx until the last idx of items 

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idx), ...items.slice(idx + 1)];
}


//---------------------------------------------------------------------------------------------------------------------------------------------

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {

}


const extend = (array1, array2) => [...array1, ...array2];

//---------------------------------------------------------------------------------------------------------------------------------------------


/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}


// newObj set equal to obj that is passed in with ... so it is spread
// the notation of next line is important
    // newObj[key] = val ;
    // objectThatYouWantToAddTo[newKey] = setEqualToThisVal;
    // The square brackets are important
const addKeyVal = (obj, key, val) {

    let newObj = {...obj}
    newObj[key] = val ;
    return newObj;
}

//---------------------------------------------------------------------------------------------------------------------------------------------

/** Return a new object with a key removed. */

function removeKey(obj, key) {

}

// Note delete operation no . connecting
const removeKey = (obj, key) => {

    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}
//---------------------------------------------------------------------------------------------------------------------------------------------

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}

const combine = (obj1, obj2) => {

    return  {...obj1, ...obj2};

}

//---------------------------------------------------------------------------------------------------------------------------------------------
/** Return a new object with a modified key and value. */

function update(obj, key, val) {

    let newObj = { ...obj }
    newObj[key]
    return newObj;

}