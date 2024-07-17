#include <stdio.h>

int allDifferent(int a, int b, int c) {
    if (a != b && a != c && b != c) {
        return 1; // All three integers are different
    } else {
        return 0; // At least two integers are the same
    }
}

int main() {
    int num1, num2, num3;
    
    printf("Enter three integers: ");
    scanf("%d %d %d", &num1, &num2, &num3);
    
    if (allDifferent(num1, num2, num3)) {
        printf("All three integers are different.\n");
    } else {
        printf("At least two integers are the same.\n");
    }
    
    return 0;
}
