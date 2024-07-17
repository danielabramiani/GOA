# i = 1
# while i <= 100:
#   print(i)
#   i = i + 1
i = 1
while i <= 3:
    print(i)
    i += 1
    
    
    
import random

# List of the words
words = ["house", "mate", "ilia", "tuta", "hello"]

# Choosing the random word
secret_word = random.choice(words).lower()

# variables
attempts = 6
guessed_letters = []

# Hangman stages
hangman_stages = [
    """
       +---+
       |   |
           |
           |
           |
           |
     =======""",
    """
       +---+
       |   |
       O   |
           |
           |
           |
     =======""",
    """
       +---+
       |   |
       O   |
       |   |
           |
           |
     =======""",
    """
       +---+
       |   |
       O   |
      /|   |
           |
           |
     =======""",
    """
       +---+
       |   |
       O   |
      /|\  |
           |
           |
     =======""",
    """
       +---+
       |   |
       O   |
      /|\  |
      /    |
           |
     =======""",
    """
       +---+
       |   |
       O   |
      /|\  |
      / \  |
           |
     ======="""
]

#games loop

while attempts > 0:
    #displaying the hangman stage
    print(hangman_stages[6 - attempts])

    #displaying the status
    display_word = ''.join([char if char in guessed_letters else '_' for char in secret_word])
    print(display_word)

    #checking if the word is guesde

    if '_' not in display_word:
        print("nice one! you guessed the word that was:", secret_word)
        break

    #the code for input
    guess = input("guess a letter:").lower()

    #checking if the letter is already guessed
    if guess in guessed_letters:
        print("you guessed that letter already")
        continue
    guessed_letters.append(guess)

    #checking if the letter is in the word
    if guess not in secret_word:
        attempts -= 1
        print("incorrect guess :( you have",  attempts, "attempts left")
    else:
        print("correct guess nice")

        #game over!

        if attempts == 0:
            print("game over! the word was:", secret_word)