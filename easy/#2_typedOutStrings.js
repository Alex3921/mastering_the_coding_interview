// Leetcode: https://leetcode.com/problems/backspace-string-compare/

// Statement: Given two strings S and T, return if they equal when both 
// are typed out. Any "#" that appears in the string counts as a backspace


// Step 1: Verify the constraints
// Q: What happens when two "##" appear beside each other?
// A: Delete the two values before the first #
// Q: What happens to "#" when there is no character to remove?
// A: It deletes nothing then, just like backspace would.
// Q: Are two empty strings equalt to each other?
// A: Yes.
// Q: Does case sensitivity matter?
// A: Yes.


// Step 2: Write test cases
// S: "ab#z", T: "az#z"    => return true
// S: "abc#d", T: "acc#c"  => return false
// S: "x#y#z#", T: "x#y#z#"=> return true
// S: "x###b", T: "b"      => return true
// S: "Ab#z", T: "ab#z"    => return false



// Step 3: Coding the brute force solution
// const typedOutStrings = function (s,t) {
//     const buildString = function (string) {
//         const buildArray = [];

//         for(const l of string) {
//             if(l !== "#") {
//                 buildArray.push(l);
//             } else {
//                 buildArray.pop();
//             };
//         };
//         return buildArray;
//     };

//     const finalS = buildString(s); // O(a)
//     const finalT = buildString(t); // O(b)

//     if(finalS.length !== finalT.length) {
//         return false;
//     } else {
//         for(let i = 0; i < finalS.length; i++) { // O(a) or O(b)
//             if(finalS[i] !== finalT[i]) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

// Time complexity: O(2a+b) or O(a+2b) => O(a+b)
// Space complexity: O(a+b)


// Step 4: Optimize the solution
const typedOutStrings = function (s,t) {
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] !== t[i]) {
            return false;
        }
    }
    console.log("true")
    return true;
}

typedOutStrings("abc#d", "abd")

// Time complexity: O(n)
// Space complexity: O(1)