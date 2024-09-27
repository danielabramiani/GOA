#include <stdio.h>

int maximum_find(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int arr[] = {10, 30, 5, 45, 25};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = maximum_find(arr, n);
    printf("Maximum element is %d\n", max);
    return 0;
}
