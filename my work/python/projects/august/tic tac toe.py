def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 5)

def check_winner(board, player):
    for i in range(3):
        if board[i][0] == player and board[i][1] == player and board[i][2] == player:
            return True

    for i in range(3):
        if board[0][i] == player and board[1][i] == player and board[2][i] == player:
            return True

    # Check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[2][0] == player and board[1][1] == player and board[0][2] == player:
        return True

    return False

def initialize_board():
    board = []
    for _ in range(3):
        row = []
        for _ in range(3):
            row.append(" ")
        board.append(row)
    return board

def tic_tac_toe():
    board = initialize_board()
    players = ["X", "O"]
    turn = 0

    for _ in range(9):
        print_board(board)
        player = players[turn % 2]
        print(f"{player}'s turn")

        while True:
            try:
                user_input = input("Enter row and column (0, 1, 2) separated by a space: ")
                row, col = int(user_input[0]), int(user_input[2])
                if board[row][col] == " ":
                    board[row][col] = player
                    break
                else:
                    print("Cell already occupied.")
            except (ValueError, IndexError):
                print("Invalid input. Please enter row and column as two numbers from 0 to 2.")

        if check_winner(board, player):
            print_board(board)
            print(f"{player} wins!")
            return

        turn += 1

    print_board(board)
    print("It's a draw!")

tic_tac_toe()
