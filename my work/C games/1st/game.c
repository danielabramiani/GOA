#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MIN_NUMBER 1
#define MAX_NUMBER 100

int generateRandomNumber(int min, int max) {
    return min + rand() % (max - min + 1);
}

int main() {
    srand(time(NULL)); 

    int secretNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
    int guess;
    int attempts = 0;
    
    printf("Welcome to the Number Guessing Game!\n");
    printf("I have selected a number between %d and %d.\n", MIN_NUMBER, MAX_NUMBER);
    printf("Can you guess what it is?\n");

    do {
        printf("Enter your guess: ");
        scanf("%d", &guess);
        attempts++;

        if (guess < secretNumber) {
            printf("Too low! Try again.\n");
        } else if (guess > secretNumber) {
            printf("Too high! Try again.\n");
        } else {
            printf("Congratulations! You guessed the number %d in %d attempts!\n", secretNumber, attempts);
        }
    } while (guess != secretNumber);

    return 0;
}
