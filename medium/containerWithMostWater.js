// Statement: You are given an array of positive integers where each integer 
// represents the height of a vertical line on a chart. 
// Find two lines which together with the x-axis forms a container that would 
// hold the greatest amount of water. Return the are of water it would hold.


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
// [6,9,3,4,5,8]=> return [1,5]


// Step 3: Figure out a solution without code
// [7,1,2,3,9]
// area = l x w
// min(a,b) x (bi-ai) -- bi = right most index; ai = left most index
// min(7,1) x (1-0)