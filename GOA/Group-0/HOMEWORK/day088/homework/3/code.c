#include <stdio.h>

// Define a function f(x) = x^2
double function(double x) {
    return x * x;
}

int main() {
    double x = 3.0;
    double result = function(x);
    
    printf("f(%lf) = %lf\n", x, result);
    
    return 0;
}

// Function: In mathematics, a function is like a rule or a machine that takes an input (or multiple inputs) and produces a unique output. You can think of it as a process that assigns exactly one output value to each input value.

// Correspondence between two sets: A function establishes a relationship between two sets of objects. In this context, let's call the sets 
// 𝐴
// A and 
// 𝐵
// B. The set 
// 𝐴
// A is called the domain, and the set 
// 𝐵
// B is called the codomain. The function maps each element from the domain set 
// 𝐴
// A to exactly one element in the codomain set 
// 𝐵
// B.

// One piece cannot go into two: This means that each element in the domain set 
// 𝐴
// A gets mapped to exactly one element in the codomain set 
// 𝐵
// B, and vice versa. In other words, no element in the domain set 
// 𝐴
// A can have more than one corresponding element in the codomain set 
// 𝐵
// B.

// To illustrate this concept, let's consider an example:

// Suppose we have two sets:

// Set 
// 𝐴
// A: {1, 2, 3}
// Set 
// 𝐵
// B: {a, b, c}
// Now, let's define a function 
// 𝑓
// f that maps elements from set 
// 𝐴
// A to set 
// 𝐵
// B as follows:

// 𝑓
// (
// 1
// )
// =
// 𝑎
// f(1)=a
// 𝑓
// (
// 2
// )
// =
// 𝑏
// f(2)=b
// 𝑓
// (
// 3
// )
// =
// 𝑐
// f(3)=c
// This function 
// 𝑓
// f follows the rule that each element from set 
// 𝐴
// A is assigned to exactly one element in set 
// 𝐵
// B, and no element from set 
// 𝐴
// A maps to more than one element in set 
// 𝐵
// B. Similarly, each element in set 
// 𝐵
// B has exactly one pre-image in set 
// 𝐴
// A.

// So, in essence, the statement "A function is a correspondence between two sets (one function and another function) when one piece cannot go into two" emphasizes the unique mapping property of functions, ensuring that each input corresponds to exactly one output.



