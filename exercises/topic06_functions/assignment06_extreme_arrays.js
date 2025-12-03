/*
Implement the functions
`extreme`,
`shiftToPositive`,
`shiftToPositiveInPlace`,
`sort`, and
`sortCopy` such that all tests succeed.

`extreme` searches the smallest or largest element in an array.
The second (optional) argument decides whether to pick the smallest (default) or the largest.

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
text into JavaScript code. The algorithm is not part of this course material.
https://en.wikipedia.org/wiki/Insertion_sort

If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.
*/
//DRY don't repeat yourself
//identical (loops/functions)
//not identical -> make identical by introducing variables
//SRP single responsibility principle
// max 6 to 7 lines of code
// max 3 parameters
// max 2 indents
function min(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++)
        if(array[i] < min)
            min = array[i];
    return min;
}

function max(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++)
        if(array[i] > max)
            max = array[i];
    return max;
}

function extreme(array, findMinimum = true) {
    /*if(findMinimum) {
        return min(array);
    } else {
        return max(array);
    }*/
    let max = array[0];
    let min = array[0];
    for(let el of array) {
        if(el > max) max = el;
        if(el < min) min = el;
    }
    if(findMinimum)
        return min;
    else
        return max;
}

function copy(array) {
    let copy = [];
    for(let el of array)
        copy.push(el);
    return copy;
}

function shiftToPositive(array) {
    const res = copy(array);
    shiftToPositiveInPlace(res);
    return res;
}

function shiftToPositiveInPlace(array) {
    let shift = min(array);
    if(shift < 0)
        shift = -shift;
    else
        shift = 0;
    for (let i = 0; i < array.length; i++)
        array[i] += shift;
}

function sort(array) {
    for (let i = 1; i < array.length; i++) {
        let tmp = array[i];
        let j = i;
        while(j > 0 && array[j-1] > tmp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = tmp;
    }
}

function sortCopy(array) {
    const res = copy(array);
    sort(res);
    return res;
}
















/*function sort(array) {
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
}*/

/*function sortCopy (array) {
    let res = copy(array);
    return sort(res);
}*/

export {
  extreme,
  shiftToPositive,
  shiftToPositiveInPlace,
  sort,
  sortCopy
};

