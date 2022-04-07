// Given an array of integers,
// return the indices of the two 
// numbers that add up to a given target.


// Step 1: Verify the constrains

// Are all the numbers positive or can there be negatives?
// Are there duplicate numbers in the array?
// Will there always be a solution available?
// What do we return if there is no solution?
// Can there be multiple pairs that add up to the target?


// Step 2: Write out some test cases
// [1,3,7,9,2], t = 11, return [3,4]
// [1,3,7,9,2], t = 25, return null
// [],          t = 1,  return null
// [5],         t = 5,  return null
// [1,6],       t = 7,  return [0,1]


// Step 3: Figure out a solution without code
// think in plain english
// devise a solution with no code


// Step 4: Write out brute force solution
// const findTwoSum = function  (nums, target) {
//     for(let p1 = 0; p1 < nums.length; p1++) {
//         const numberToFind = target - nums[p1]

//         for(p2 = p1 + 1; p2 < nums.length; p2++) {
//             if(numberToFind === nums[p2]) {
//                 return [p1,p2]
//             }
//         }
//     }

//     return null;
// }


// Step 5: Double check for errors
// code should be ready to be copied in a terminal and run


// Step 6: Do a dry run of the code using test case
// this will show the interviewer that you understand
// how your code works


// Step 7: Analyzing the Space and Time complexity
// Time complexity: O(n^2)
// Space complexity: O(1)


// Step 8: Optimize solution
// const findTwoSum = function (nums, target) {
//     const numsMap = {};
//     for(let p = 0; p < nums.length; p++) {
//         const currentMapVal = numsMap[nums[p]];

//         if(currentMapVal >= 0){
//             return [currentMapVal, p];
//         } else {
//             const numberToFind = target - nums[p];

//             numsMap[numberToFind] = p;
//         };
//     };

//     return null;
// }


// Repeat step 6
// Repeat step 7
// Time: O(n)
// Space: O(n)