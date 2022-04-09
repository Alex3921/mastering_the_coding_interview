// Statement: Given ana array of integers representing an elevation 
// map where the width of each bar is 1, return how much rainwater can be trapped.


// Step 1: Verify the constraints
// Q: Do the left and right sides of the graph count as walls?
// A: No, the sides are not walls.
// Q: Will there be negative integers?
// A: No.


// Step 2: Write test cases
// [0,1,0,2,1,0,3,1,0,1,2] => return 8
// []                      => return 0
// [3]                     => return 0
// [3,4,3]                 => return 0


// Step 3: Coding the brute force solution
// const trappingRainwater = function (height) {
//     let totalWater = 0;
//     for(let p = 0; p < height.length; p++) {
//         let leftP = p;
//         let rightP = p;
//         let maxLeft = 0;
//         let maxRight = 0;

//         while(leftP >= 0) {
//             maxLeft = Math.max(maxLeft, height[leftP]);
//             leftP--;
//         }

//         while(rightP < height.length) {
//             maxRight = Math.max(maxRight, height[rightP]);
//             rightP++;
//         }

//         const currentWater = Math.min(maxLeft, maxRight) - height[p];
//         if(currentWater >= 0) {
//             totalWater += currentWater;
//         }
//     }
//     console.log(totalWater);
//     return totalWater;
// }

// Time complexity: O(n^2)
// Space complexity: O(1)


// Step 4: Optimize the solution
const trappingRainwater = function(height) {
    // Identify pointer with lesser value
    // Is this pointer value greater than or equal to max on that side
        // yes => update max on that side
        // no => get water for pointer value, add to total
    // move pointer inwards
    // repeat for other pointer

}