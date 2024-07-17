#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

#define TEAM_A "Team A"
#define TEAM_B "Team B"

#define NUM_PLAYERS 12
#define QUARTERS 4
#define TIMEOUTS 5

typedef struct {
    char name[20]; // Player's name
    int shooting; // Shooting ability
    int rebounding; // Rebounding ability
    int fouls; // Number of fouls
    int points; // Points scored
    int assists; // Assists made
    int steals; // Steals made
    int blocks; // Blocks made
    int freeThrowsAttempted; // Free throws attempted
    int freeThrowsMade; // Free throws made
} Player;

// Function to print player details
void printPlayer(Player player) {
    printf("Name: %s, Points: %d, Assists: %d, Rebounds: %d, Steals: %d, Blocks: %d, Fouls: %d\n",
           player.name, player.points, player.assists, player.rebounding, player.steals, player.blocks, player.fouls);
}

// Function to simulate player action (shooting and rebounding)
void simulateAction(Player* shooter, Player team[], int defenseIndex) {
    int shotOutcome = rand() % 100;
    int reboundOutcome = rand() % 100;

    if (shotOutcome < shooter->shooting) {
        shooter->points += 2; // Two-point shot
        team[defenseIndex].rebounding++;
    } else if (reboundOutcome < team[defenseIndex].rebounding) {
        team[defenseIndex].rebounding++;
    } else {
        team[defenseIndex].rebounding++;
    }
}

// Function to simulate basketball game
void simulateBasketballGame() {
    Player teamA[NUM_PLAYERS];
    Player teamB[NUM_PLAYERS];
    int scoreA = 0, scoreB = 0;
    int timeoutsA = TIMEOUTS, timeoutsB = TIMEOUTS;
    srand(time(NULL));

    // Initialize players for Team A and Team B
    for (int i = 0; i < NUM_PLAYERS; i++) {
        sprintf(teamA[i].name, "Player A%d", i + 1);
        teamA[i].shooting = rand() % 80 + 60;
        teamA[i].rebounding = rand() % 70 + 50;
        teamA[i].fouls = 0;
        teamA[i].points = 0;
        teamA[i].assists = 0;
        teamA[i].steals = 0;
        teamA[i].blocks = 0;
        teamA[i].freeThrowsAttempted = 0;
        teamA[i].freeThrowsMade = 0;

        sprintf(teamB[i].name, "Player B%d", i + 1);
        teamB[i].shooting = rand() % 80 + 60;
        teamB[i].rebounding = rand() % 70 + 50;
        teamB[i].fouls = 0;
        teamB[i].points = 0;
        teamB[i].assists = 0;
        teamB[i].steals = 0;
        teamB[i].blocks = 0;
        teamB[i].freeThrowsAttempted = 0;
        teamB[i].freeThrowsMade = 0;
    }

    printf("Basketball Game between %s and %s\n", TEAM_A, TEAM_B);

    // Simulate each quarter of the game
    for (int quarter = 1; quarter <= QUARTERS; quarter++) {
        printf("Quarter %d\n", quarter);

        // Simulate each minute of the quarter
        for (int minute = 1; minute <= 12; minute++) {
            int offenseIndexA = rand() % NUM_PLAYERS;
            int defenseIndexB = rand() % NUM_PLAYERS;
            int offenseIndexB = rand() % NUM_PLAYERS;
            int defenseIndexA = rand() % NUM_PLAYERS;

            // Simulate actions for Team A and Team B
            simulateAction(&teamA[offenseIndexA], teamB, defenseIndexB);
            simulateAction(&teamB[offenseIndexB], teamA, defenseIndexA);

            // Print game status
            printf("Time: Quarter %d, Minute %d\n", quarter, minute);
            printf("%s %d - %d %s\n", TEAM_A, scoreA, scoreB, TEAM_B);
            printf("Timeouts Left: %s - %d, %s - %d\n", TEAM_A, timeoutsA, TEAM_B, timeoutsB);
            printf("Team A:\n");
            printPlayer(teamA[offenseIndexA]);
            printf("Team B:\n");
            printPlayer(teamB[offenseIndexB]);
            printf("\n");

            // Timeout logic
            if (minute == 6 && quarter != 4) {
                printf("Timeout called by %s\n", TEAM_A);
                timeoutsA--;
            }

            if (minute == 12 && quarter != 4) {
                printf("Timeout called by %s\n", TEAM_B);
                timeoutsB--;
            }

            // Foul simulation
            int foulA = rand() % 100;
            int foulB = rand() % 100;

            if (foulA < teamB[defenseIndexB].shooting) {
                printf("Foul by %s on %s\n", TEAM_B, TEAM_A);
                teamB[defenseIndexB].fouls++;
                if (teamB[defenseIndexB].fouls >= 5) {
                    printf("%s fouled out!\n", teamB[defenseIndexB].name);
                    // Implement substitution logic
                }
            }

            if (foulB < teamA[defenseIndexA].shooting) {
                printf("Foul by %s on %s\n", TEAM_A, TEAM_B);
                teamA[defenseIndexA].fouls++;
                if (teamA[defenseIndexA].fouls >= 5) {
                    printf("%s fouled out!\n", teamA[defenseIndexA].name);
                    // Implement substitution logic
                }
            }
        }
    }

    printf("Final Score: %s %d - %d %s\n", TEAM_A, scoreA, scoreB, TEAM_B);
}

// Main function
int main() {
    simulateBasketballGame();
    return 0;
}
