def show_menu():
    print("1. View tasks")
    print("2. Add a task")
    print("3. Delete a task")
    print("4. Exit")

def main():
    tasks = []
    while True:
        show_menu()
        choice = input("Choose an option: ")
        
        if choice == "1":
            if tasks:
                for i in range(len(tasks)):
                    print(f"{i + 1}. {tasks[i]}")
            else:
                print("No tasks.")
        
        elif choice == "2":
            task = input("Enter the task: ")
            tasks.append(task)
        
        elif choice == "3":
            if tasks:
                for i in range(len(tasks)):
                    print(f"{i + 1}. {tasks[i]}")
                try:
                    task_num = int(input("Enter task number to delete: "))
                    if task_num >= 1 and task_num <= len(tasks):
                        tasks.pop(task_num - 1)
                    else:
                        print("Invalid task number.")
                except ValueError:
                    print("Please enter a valid number.")
            else:
                print("No tasks to delete.")
        
        elif choice == "4":
            print("Goodbye!")
            break
        
        else:
            print("Invalid choice. Please try again.")

main()
