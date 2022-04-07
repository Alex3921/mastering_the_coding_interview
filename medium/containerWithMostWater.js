// Statement: You are given an array of positive integers where each integer 
// represents the height of a vertical line on a chart. 
// Find two lines which together with the x-axis forms a container that would 
// hold the greatest amount of water. Return the area of water it would hold.


// Step 1: Verify the constrains
// Q: Does the tickness of the lines affect the area?
// A: No, assume they take up no space.
// Q: Do the left and right sides of the graph count as walls?
// A: No, the sides cannot be used to form a container.
// Q: Does a higher line inside our container affect our area?
// A: No, lines inside a container don't affect the area.


// Step 2: Coming up with test cases
// []           => return 0
// [8]          => return 0
// [6,9,3,4,5,8]=> return maxArea


// Step 3: Figure out a solution without code
// [7,1,2,3,9]
// area = l x w
// min(a,b) x (bi-ai) -- bi = right most index; ai = left most index
// min(7,1) x (1-0)


// Step 4: Brute force solution
// const mostWater = function (arr) {
//     let maxArea = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             const height = Math.min(arr[i], arr[j]);
//             const width = j - i;
//             const area = height * width;
//             maxArea = Math.max(maxArea, area);
//         }
//     }

//     return maxArea;
// }

// Time complexity: O(n^2)
// Space complexity: O(1)


// Step 5: Optimal solution
// const mostWater = function (height) {
//     let maxArea = 0;
//     let left = 0;
//     let right = height.length-1;
//     while(left < right) {
//         const minHeight = Math.min(height[left], height[right]);
//         const width = right - left;
//         const area = minHeight * width;
//         maxArea = Math.max(maxArea, area);
//         if(height[left] <= height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxArea;
// }

// Time complexity: O(n)
// Space complexity: O(1)