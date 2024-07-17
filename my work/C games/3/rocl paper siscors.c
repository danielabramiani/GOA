#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define ROCK 0
#define PAPER 1
#define SCISSORS 2

const char* moves[] = {"Rock", "Paper", "Scissors"};

int computerMove(int playerMove) {
    return (playerMove + 1) % 3;
}

int main() {
    srand(time(NULL));

    int playerChoice, computerChoice;

    printf("Welcome to Rock, Paper, Scissors!\n");
    printf("Enter your move:\n");
    printf("0 - Rock\n");
    printf("1 - Paper\n");
    printf("2 - Scissors\n");
    printf("Your choice: ");
    scanf("%d", &playerChoice);

    if (playerChoice < 0 || playerChoice > 2) {
        printf("Invalid choice. Please enter a number between 0 and 2.\n");
        return 1; 
    }

    computerChoice = computerMove(playerChoice);

    printf("You chose %s.\n", moves[playerChoice]);
    printf("Computer chose %s.\n", moves[computerChoice]);

    // Determine the winner
    if (playerChoice == computerChoice) {
        printf("It's a tie!\n");
    } else if ((playerChoice == ROCK && computerChoice == SCISSORS) ||
               (playerChoice == PAPER && computerChoice == ROCK) ||
               (playerChoice == SCISSORS && computerChoice == PAPER)) {
        printf("Congratulations! You win!\n");
    } else {
        printf("Computer wins. Better luck next time!\n");
    }

    return 0;
}
