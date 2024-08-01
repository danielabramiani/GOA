candidates = {
    "Trump": 0,
    "Biden": 0,
    "Daniel": 0
}

def vote(candidate):
    if candidate in candidates:
        candidates[candidate] += 1
    else:
        print("Invalid candidate.")

while True:
    print("Candidates: Trump, Biden, Daniel")
    choice = input("Enter your vote (or 'results' to see results, 'quit' to exit): ").strip().capitalize()
    if choice in candidates:
        vote(choice)
    elif choice == "Results":
        for candidate, votes in candidates.items():
            print(f"{candidate}: {votes} votes")
    elif choice == "Quit":
        break
    else:
        print("Invalid choice.")