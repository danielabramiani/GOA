grades = {}

def add_or_update_grade(name, grade):
    grades[name] = grade
    print(f"Added/Updated grade for {name}: {grade}")

def view_grades():
    if not grades:
        print("No grades available.")
    for name, grade in grades.items():
        print(f"{name}: {grade}")

def remove_grade(name):
    if name in grades:
        del grades[name]
        print(f"Removed grade for {name}")
    else:
        print("Student not found.")

def main():
    while True:
        print("\nStudent Grades Tracker")
        print("1. Add/Update Grade")
        print("2. View Grades")
        print("3. Remove Grade")

        choice = input("Enter choice: ").strip()

        if choice == "1":
            name = input("Enter student name: ").strip()
            grade = input("Enter grade: ").strip()
            add_or_update_grade(name, grade)
        elif choice == "2":
            view_grades()
        elif choice == "3":
            name = input("Enter student name to remove: ").strip()
            remove_grade(name)
        else:
            print("Invalid choice. Please try again.")

main()