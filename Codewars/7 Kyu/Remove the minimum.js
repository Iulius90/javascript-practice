// link: http://www.codewars.com/kata/remove-the-minimum


//                           Remove the minimum


// Given an array of integers, remove the smallest value. Do not mutate 
// the original array/list. If there are multiple elements with the same value, 
// remove the one with a lower index. If you get an empty array/list, return an 
// empty array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

const removeSmallest = n => {
  
  if(n.length == 0) { return [];} 
  else {  
    let x = n.indexOf(Math.min.apply(null, n));
    n.splice(x,1 );
    
    return n;
  }
}
