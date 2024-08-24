import time

def main_game():
    print("Hello! Welcome to the animal fight game made by Daniel.")
    time.sleep(2)
    print("There will be 10 suggested animals, and you have to win against each other. Good luck!")
    time.sleep(3)
    
    player_1_name = input("Player 1, enter your name: ")
    player_2_name = input("Player 2, enter your name: ")
    
    print("\nAnimal choices: tiger, cat, lion, gorilla, bear, wolf, horse, daniel, cheetah, eagle")
    
    choice = input(f"{player_1_name}, enter your choice: ").strip().lower()
    choice_2 = input(f"{player_2_name}, enter your choice: ").strip().lower()
    
    if choice == "tiger" and choice_2 == "cat":
        print(f"{player_1_name} wins!")
    elif choice == "cat" and choice_2 == "tiger":
        print(f"{player_2_name} wins!")
    elif choice == "lion" and choice_2 == "gorilla":
        print(f"{player_1_name} wins!")
    elif choice == "gorilla" and choice_2 == "lion":
        print(f"{player_2_name} wins!")
    elif choice == "bear" and choice_2 == "wolf":
        print(f"{player_1_name} wins!")
    elif choice == "wolf" and choice_2 == "bear":
        print(f"{player_2_name} wins!")
    elif choice == "horse" and choice_2 == "daniel":
        print(f"{player_1_name} wins!")
    elif choice == "daniel" and choice_2 == "horse":
        print(f"{player_2_name} wins!")
    elif choice == "cheetah" and choice_2 == "eagle":
        print(f"{player_1_name} wins!")
    elif choice == "eagle" and choice_2 == "cheetah":
        print(f"{player_2_name} wins!")
    else:
        print("It's a draw!")

main_game()