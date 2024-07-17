#include <stdio.h>

// Define a function f that corresponds between two sets A and B
// Here, A is the domain (definition area) and B is the codomain (value set)
// Property 1: One element of the definition corresponds to only one element of the value set
// Property 2: Each element of the definition has a corresponding element in the value set

// Function f: Maps elements from set A to set B
// It adheres to the properties described above
// Parameters:
//   x: Element from set A (domain)
// Returns:
//   Corresponding element from set B (codomain)
int function(int x) {
    // Define the mapping rules
    // Property 1 is satisfied because each input value (x) has a unique output value
    // Property 2 is satisfied because there's a defined output for every possible input value
    
    // Example mapping:
    // For every input x, we can define a corresponding output y
    // In this example, let's say we multiply each input by 2
    int y = x * 2;
    return y;
}

int main() {
    // Example usage:
    // Property 1: One element of the definition corresponds to only one element of the value set
    // Property 2: Each element of the definition has a corresponding element in the value set
    
    // Property 1:
    // For every input x, there exists exactly one corresponding output y
    // Example: For x = 3, the corresponding output y is 6
    printf("Function output for x = 3: %d\n", function(3)); // Expected output: 6
    
    // Property 2:
    // Each element of the domain has a corresponding element in the codomain
    // Example: For every integer x, there's a corresponding output y
    // Let's print some mappings for demonstration
    for (int i = 1; i <= 5; i++) {
        printf("Function output for x = %d: %d\n", i, function(i));
    }
    
    return 0;
}
