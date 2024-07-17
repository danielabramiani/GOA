#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

#define TEAM_A "Team A"
#define TEAM_B "Team B"

#define NUM_PLAYERS 11
#define HALF_TIME 45

typedef struct {
    char name[20];
    int strength;
    int stamina;
    int yellowCards;
    int redCards;
    int goalsScored;
} Player;

int simulateAction(int strength) {
    int outcome = rand() % 100;
    if (outcome < strength) {
        return 1; // Success
    } else {
        return 0; // Failure
    }
}

void simulateFootballGame() {
    Player teamA[NUM_PLAYERS];
    Player teamB[NUM_PLAYERS];
    int scoreA = 0, scoreB = 0;
    int isDraw = 0;
    srand(time(NULL));

    for (int i = 0; i < NUM_PLAYERS; i++) {
        sprintf(teamA[i].name, "Player A%d", i + 1);
        teamA[i].strength = rand() % 80 + 70;
        teamA[i].stamina = rand() % 80 + 70;
        teamA[i].yellowCards = 0;
        teamA[i].redCards = 0;
        teamA[i].goalsScored = 0;

        sprintf(teamB[i].name, "Player B%d", i + 1);
        teamB[i].strength = rand() % 80 + 70;
        teamB[i].stamina = rand() % 80 + 70;
        teamB[i].yellowCards = 0;
        teamB[i].redCards = 0;
        teamB[i].goalsScored = 0;
    }

    printf("Football Game between %s and %s\n", TEAM_A, TEAM_B);

    for (int minute = 1; minute <= HALF_TIME; minute++) {
        int actionA = rand() % 3;
        int actionB = rand() % 3;
        int outcomeA = simulateAction(teamA[0].strength);
        int outcomeB = simulateAction(teamB[0].strength);

        if (actionA == 1 && outcomeA == 1) {
            printf("Goal for %s by %s!\n", TEAM_A, teamA[0].name);
            teamA[0].goalsScored++;
            scoreA++;
        }
        if (actionB == 1 && outcomeB == 1) {
            printf("Goal for %s by %s!\n", TEAM_B, teamB[0].name);
            teamB[0].goalsScored++;
            scoreB++;
        }
    }

    printf("Halftime: %s %d - %d %s\n", TEAM_A, scoreA, scoreB, TEAM_B);

    for (int minute = HALF_TIME + 1; minute <= 90; minute++) {
        int actionA = rand() % 3;
        int actionB = rand() % 3;
        int outcomeA = simulateAction(teamA[0].strength);
        int outcomeB = simulateAction(teamB[0].strength);

        if (actionA == 1 && outcomeA == 1) {
            printf("Goal for %s by %s!\n", TEAM_A, teamA[0].name);
            teamA[0].goalsScored++;
            scoreA++;
        }
        if (actionB == 1 && outcomeB == 1) {
            printf("Goal for %s by %s!\n", TEAM_B, teamB[0].name);
            teamB[0].goalsScored++;
            scoreB++;
        }
    }

    printf("Full Time: %s %d - %d %s\n", TEAM_A, scoreA, scoreB, TEAM_B);

    if (scoreA == scoreB) {
        printf("It's a draw after 90 minutes!\n");
        printf("Choose what happens next:\n");
        printf("1. Draw\n");
        printf("2. Golden Goal\n");
        printf("3. Penalty Shootout\n");
        printf("4. Extra Time\n");
        int choice;
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("The match ends in a draw.\n");
                break;
            case 2:
                printf("Golden Goal! First team to score wins.\n");
                break;
            case 3:
                printf("Penalty Shootout!\n");
                break;
            case 4:
                printf("Extra Time!\n");
                break;
            default:
                printf("Invalid choice. The match ends in a draw.\n");
        }
    }
}

int main() {
    simulateFootballGame();
    return 0;
}