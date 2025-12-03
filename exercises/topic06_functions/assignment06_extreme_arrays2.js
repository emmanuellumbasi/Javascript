/*
Implement the functions
`extreme`,
`shiftToPositive`,
`shiftToPositiveInPlace`,
`sort`, and
`sortCopy` such that all tests succeed.

`extreme` searches the smallest or largest element in an array.
The second (optional) argument decides whether to pick the smallest (default).

`shiftToPositive` creates an array with the same elements as the input
array, but ensures that all elements are positive by shifting them all with
the smallest possible number (if needed).

`shiftToPositiveInPlace` does the exact same thing, but  *in place* , this means that the
original array is updated.

Take a look at the tests to see how we verify both functions.


`sort`, and `sort_copy` both take an array with numbers as input and returns an array
with the same numbers from low to high (sorted). The difference is that
`sort` is *in-place*, i.e., the original array is updated and that `sortCopy`
creates a new array.

**Hint:** Take a look at this algorithm and try to translate the English
text into JavaScript code. The algorithm is not part of this courses material.
https://en.wikipedia.org/wiki/Insertion_sort

If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.
*/
function minimum(array) {
    let min = array[0];
    for (const number of array) {
        if(number < min) min = number;
    }
    return min;
}

function maximum(array) {
    let max = array[0];
    for (const number of array) {
        if(number > max) max = number;
    }
    return max;
}


function extreme(array, smallest = true) {
    if(smallest) return minimum(array);
    else return maximum(array);
    /*let min = array[0];
    let max = array[0];
    for (const number of array) {
        if(number > max) max = number;
        if(number < min) min = number;
    }
    if(smallest) return min;
    else return max;*/
}

function shiftValues(array, offset) {
    for (let i = 0; i < array.length; i++)
        array[i] += offset;
}

function shiftToPositiveInPlace(array) {
    let min = extreme(array);
    if(min < 0)
        shiftValues(array, Math.abs(min));
}

function copy(array) {
    let res = [];
    for(let number of array) {
        res.push(number);
    }
    return res;
}

function shiftToPositive(array) {
    let copy = copy(array);
    shiftToPositiveInPlace(copy);
    return copy;
}

//------------------------

function sort(array) {
    let res = [];
    let changed = true;
    while(changed) {
        changed = false;
        for (let i = 0; i < array.length-1; i++) {
            if(array[i] > array[i+1]) {
                let tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
                changed = true;
            }
        }
    }
    return res;
}

/*function shiftToPositiveInPlace(array) {
    let min = lowest(array);
    let shift = 0;
    if(min < 0) shift = -min;
    for (let i = 0; i < array.length; i++) {
        array[i] += shift;
    }
    return array;
}*/

/*function shiftToPositive(array) {
    let res = copy(array);
    return shiftToPositiveInPlace(res);
    /*let res = [];
    let min = lowest(array);
    let shift = 0;
    if(min < 0) shift = -min;
    for(let el of array)
        res.push(el + shift);
    return res;*/
//}*/

function lowest(array) {
    let low = array[0];
    for(let el of array) {
        if(el < low) low = el;
    }
    return low;
}

function highest(array) {
    let high = array[0];
    for(let el of array) {
        if(el > high) high = el;
    }
    return high;
}

/*function extreme(array, smallest = true) {
    if(smallest) return lowest(array);
    else return highest(array);
    /*let res = array[0];
    for(let el of array) {
        if(smallest) {
            if(el < res) res = el;
        } else {
            if(el > res) res = el;
        }
    }
    return res;*/
    /*let min = array[0];
    let max = array[0];
    for(let el of array) {
        if(el < min) min = el;
        if(el > max) max = el;
    }
    if(smallest) return min;
    else return max;*/
//}*/

function sortCopy (array) {
    let res = copy(array);
    return sort(res);
}

export {
  extreme,
  shiftToPositive,
  shiftToPositiveInPlace,
  sort,
  sortCopy
};

