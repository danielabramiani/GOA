tasks = []

def add_task(task):
    tasks.append({"task": task, "completed": False})
    print(f"Added task: {task}")

def view_tasks():
    if not tasks:
        print("No tasks available.")
    else:
        index = 1
        for task in tasks:
            status = "Completed" if task["completed"] else "Pending"
            print(f"{index}. {task['task']} - {status}")
            index += 1

def remove_task(index):
    if 0 <= index < len(tasks):
        removed_task = tasks.pop(index)
        print(f"Removed task: {removed_task['task']}")
    else:
        print("Invalid task number.")

def complete_task(index):
    if 0 <= index < len(tasks):
        tasks[index]["completed"] = True
        print(f"Task marked as completed: {tasks[index]['task']}")
    else:
        print("Invalid task number.")

def main():
    while True:
        print("Task List Manager")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Remove Task")
        print("4. Complete Task")

        choice = input("Enter choice: ").strip()

        if choice == "1":
            task = input("Enter task: ").strip()
            add_task(task)
        elif choice == "2":
            view_tasks()
        elif choice == "3":
            index = int(input("Enter task number to remove: ")) - 1
            remove_task(index)
        elif choice == "4":
            index = int(input("Enter task number to complete: ")) - 1
            complete_task(index)
        else:
            print("Invalid choice. Please try again.")

main()
