// Statement: You are given an array of positive integers where each integer 
// represents the height of a vertical line on a chart. 
// Find two lines which together with the x-axis forms a container that would 
// hold the greatest amount of water. Return the are of water it would hold.


// Step 1: Verify the constrains.
// Q: Does the tickness of the lines affect the area?
// A: No, assume they take up no space.
// Q: Do the left and right sides of the graph count as walls?
// A: No, the sides cannot be used to form a container.
// Q: Does a higher line inside our container affect our area?
// A: No, lines inside a container don't affect the area.