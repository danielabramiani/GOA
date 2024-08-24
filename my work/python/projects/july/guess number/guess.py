import random
import time


def main_game():
    print("Hello this is guess or loose game made by daniel")
    time.sleep(2)
    print("Rules: ")
    time.sleep(2)
    print("You have to guess number from 1-100 good luck")
    time.sleep(2)
    number = random.randint(1,100)
    attempts = 0
    max_attemts = 5
    while attempts < max_attemts:
        guess = int(input("Enter your guess (between 1 and 100): "))
        attempts += 1
            
        if guess < number:
            print("You are too lowww")
        elif guess > number:
            print("You are too highhhhh")
        else:
            print("congrat You are the winner")
            
        
    if attempts == max_attemts:
        print("You Dont have any attempts")
        print(number)
main_game()