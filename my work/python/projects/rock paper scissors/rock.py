import time


def rock_paper_scissors():
    print("Hello! Welcome to the Rock Paper Scissors game.")
    time.sleep(3)
    player_1_name = input("Player 1, enter your name: ")
    player_2_name = input("Player 2, enter your name: ")
    choice = input(f"{player_1_name}, enter your choice (rock, paper, scissors): ").strip().lower()
    choice_2 = input(f"{player_2_name}, enter your choice (rock, paper, scissors): ").strip().lower()
    
    if choice == "rock" and choice_2 == "scissors":
        print(f"{player_1_name} wins!")
    elif choice == "scissors" and choice_2 == "rock":
        print(f"{player_2_name} wins!")
    elif choice == "paper" and choice_2 == "rock":
        print(f"{player_1_name} wins!")
    elif choice == "rock" and choice_2 == "paper":
        print(f"{player_2_name} wins!")
    elif choice == "scissors" and choice_2 == "paper":
        print(f"{player_1_name} wins!")
    elif choice == "paper" and choice_2 == "scissors":
        print(f"{player_2_name} wins!")
    else:
        print("It's a draw!")


rock_paper_scissors()