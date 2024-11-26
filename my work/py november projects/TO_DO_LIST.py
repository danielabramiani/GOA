def show_menu():
    print("\n1. View tasks")
    print("2. Add a task")
    print("3. Delete a task")
    print("4. Exit")

def display_tasks(tasks):
    if tasks:
        for idx, task in enumerate(tasks, 1):
            print(f"{idx}. {task}")
    else:
        print("No tasks.")

def add_task(tasks):
    task = input("Enter the task: ")
    tasks.append(task)

def delete_task(tasks):
    display_tasks(tasks)
    try:
        task_num = int(input("Enter task number to delete: "))
        if 1 <= task_num <= len(tasks):
            tasks.pop(task_num - 1)
    except ValueError:
        pass

def main():
    tasks = []
    while True:
        show_menu()
        choice = input("Choose an option: ")
        if choice == "1":
            display_tasks(tasks)
        elif choice == "2":
            add_task(tasks)
        elif choice == "3":
            delete_task(tasks)
        elif choice == "4":
            break

main()
