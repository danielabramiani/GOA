#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int rollDice() {
    return rand() % 6 + 1;
}

int main() {
    srand(time(NULL)); 

    int dice1, dice2, guess, sum;

    printf("Welcome to the Dice Roll Game!\n");

    do {
        printf("Enter your guess (2 to 12): ");
        scanf("%d", &guess);
    } while (guess < 2 || guess > 12);

    dice1 = rollDice();
    dice2 = rollDice();
    sum = dice1 + dice2;

    printf("The dice are rolled...\n");
    printf("Dice 1: %d\n", dice1);
    printf("Dice 2: %d\n", dice2);
    printf("Total: %d\n", sum);

    if (guess == sum) {
        printf("Congratulations! You guessed the correct sum!\n");
    } else {
        printf("Sorry, you guessed wrong. Better luck next time!\n");
    }

    return 0;
}
