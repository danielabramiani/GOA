#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(0));

    // Generate a random number between 1 and 100
    int jokerNumber = rand() % 100 + 1;

    int playerGuess;
    int attempts = 0;

    cout << "Welcome to the Joker's game!" << endl;
    cout << "I have selected a number between 1 and 100. Try to guess it!" << endl;

    do {
        cout << "Enter your guess: ";
        cin >> playerGuess;
        attempts++;

        if (playerGuess > jokerNumber) {
            cout << "Too high! Try again." << endl;
        } else if (playerGuess < jokerNumber) {
            cout << "Too low! Try again." << endl;
        } else {
            cout << "Congratulations! You've guessed the number in " << attempts << " attempts!" << endl;
            break;
        }

    } while (true);

    cout << "The Joker's number was: " << jokerNumber << endl;
    cout << "Thanks for playing!" << endl;

    return 0;
}
