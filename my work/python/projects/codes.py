brands = ["Honda", "Toyota", "BMW", "Mercedes"]

print(brands[-3:-1])


animals = ['cat', 'dog', 'bird']

print(animals[1])

#strings Slicing

b = "Hello, World!"
print(b[2:5])

def string(word):
    print(word[3:8])
    
string("daniel abramiani ") #output will be iel a

name = "daniel"
print(name[0:4])
#output will be dani

#Modify Strings

#upper
a = "Hello, World!"
print(a.upper())

def upper_word(name, lastname):
    if name == "daniel" and lastname == "abramiani":
        print(name.upper())
        print(lastname.upper())
    else:
        print(name)
        print(lastname)

upper_word("daniel", "abramiani")
    
#lower
a = "Hello, World!"
print(a.lower())

def lower_word(name, lastname):
    if name == "DANIEL" and lastname == "ABRAMIANI":
        print(name.lower())
        print(lastname.lower())
    else:
        print(name)
        print(lastname)

lower_word("DANIEL", "ABRAMIANI")

#strip
a = " Hello, World! "
print(a.strip()) 

def number(num):
    num_str = str(num) 
    if num % 2 == 0:
        print(num_str.strip('0'))
    else:
        print(num_str)

number(400)

#replace
a = "Hello, World!"
print(a.replace("H", "J"))

#we want to replace all question marks on exclemation marks

def removing_question(word):
    print(word.replace("?", "!"))

removing_question("is it really you?")

#split

a = "Hello, World!"
print(a.split(","))

def splitting_words(name_and_lastname):
    print(name_and_lastname.split("abramiani"))

splitting_words("daniel abramiani")

#String Concatenation

a = "Hello"
b = "World"
c = a + b
print(c)

def name_and_lastname(name, lastname):
    print(name + "," + " " + lastname)

name_and_lastname("daniel", "abramaini")

#Format - Strings

age = 36
txt = f"My name is John, I am {age}"
print(txt)

def evven_numbers(number):
    if number % 2 == 0:
        print(f"The {number} is even")
    else:
        print(f"The {number} is odd")

evven_numbers(8)


#String capitalize() Method

txt = "hello, and welcome to my world."

x = txt.capitalize()

print (x)

def capitalizing_in_pasport(name, lastname, parentsname, momname):
    print(name.capitalize())
    print(lastname.capitalize())
    print(parentsname.capitalize())
    print(momname.capitalize())

capitalizing_in_pasport("daniel", "abramaini", "chiko", "ninuca")

#List extend() Method

fruits = ['apple', 'banana', 'cherry']

cars = ['Ford', 'BMW', 'Volvo']

fruits.extend(cars)

print(fruits)

def extend_list(original_list, new_elements):
    original_list.extend(new_elements)
    print(original_list)
    
my_list = [1, 2, 3]
additional_elements = [4, 5, 6]

extend_list(my_list, additional_elements)

#pop method

fruits = ['apple', 'banana', 'cherry']

fruits.pop(1)

def pop_list(list):
    print(list.pop(0))

names = ["daniel", "davit", "nika", "dato"]
pop_list(names)

#for ... in

fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x) 
  
for word in "banana":
  print(word)
  
fruits = ["apple", "banana", "cherry"]
for some in fruits:
  if some == "banana":
    continue
  print(some)
  
for daniel in range(6):
  print(daniel)
  
def find_it(seq):
    if len(seq) == 0:
        return None
    
    for x in seq:
        count = 0
        for number in seq:
            if number == x:
                count += 1
                
        if count % 2 == 1:
            return x
    return None

def solution(number):
    sum = 0
    for x in range(0, number):
        if x % 3 == 0 or x % 5 == 0:
            sum += x
    return sum

def spin_words(sentence):
    if len(sentence) == 0:
        return "" 
    words = sentence.split()
    for i, word in enumerate(words):
        if len(word) >= 5:
            words[i] = reverse(word)
    
    return " ".join(words)

def reverse(word):
    return word[::-1]

def get_count(sentence):
    count = 0
    for char in sentence:
        if char in "aeiouAEIOU":
            count += 1
    return count

#endswith() Method

name = "daniel"

if name.endswith("l"):
    print(True)
  
# txt = "Hello, welcome to my world."

# x = txt.endswith(".")

# print(x)

#we want to explain how does string ends

def string(end, starts):
    if starts.endswith(end):
        print(True)

string("l", "daniel")

  
#dictionary

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

print(thisdict)
  
  
  
  
  
  
  
  
  
  
#project with given recources
"""
contacts = []

def add_contact(name, phone):
    contacts.append((name, phone))
    print(f"Added contact: {name.capitalize()} with phone: {phone}")

def view_contacts():
    if not contacts:
        print("No contacts available.")
    for name, phone in contacts:
        print(f"Name: {name.capitalize()}, Phone: {phone}")

def search_contact(search_name):
    for name, phone in contacts:
        if name.lower() == search_name.lower():
            print(f"Found contact: Name: {name.capitalize()}, Phone: {phone}")
            return
    print("Contact not found.")

def remove_contact(remove_name):
    global contacts
    contacts = [(name, phone) for name, phone in contacts if name.lower() != remove_name.lower()]
    print(f"Removed contact: {remove_name.capitalize()}")

def update_contact(name, new_phone):
    global contacts
    updated = False
    contacts = [(n, new_phone) if n.lower() == name.lower() else (n, p) for n, p in contacts]
    for n, p in contacts:
        if n.lower() == name.lower():
            updated = True
            print(f"Updated contact: Name: {n.capitalize()}, New Phone: {new_phone}")
    if not updated:
        print("Contact not found.")

def main():
    while True:
        print("\nPersonal Contact Manager")
        print("1. Add Contact")
        print("2. View Contacts")
        print("3. Search Contact")
        print("4. Remove Contact")
        print("5. Update Contact")
        print("6. Exit")

        choice = input("Enter choice: ").strip()

        if choice == "1":
            name = input("Enter contact name: ").strip()
            phone = input("Enter contact phone number: ").strip()
            add_contact(name, phone)
        elif choice == "2":
            view_contacts()
        elif choice == "3":
            search_name = input("Enter contact name to search: ").strip()
            search_contact(search_name)
        elif choice == "4":
            remove_name = input("Enter contact name to remove: ").strip()
            remove_contact(remove_name)
        elif choice == "5":
            name = input("Enter contact name to update: ").strip()
            new_phone = input("Enter new phone number: ").strip()
            update_contact(name, new_phone)
        elif choice == "6":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

main()





#task list

tasks = []

def add_task(task):
    tasks.append({"task": task, "completed": False})
    print(f"Added task: {task}")

def view_tasks():
    if not tasks:
        print("No tasks available.")
    for idx, task in enumerate(tasks):
        status = "Completed" if task["completed"] else "Pending"
        print(f"{idx + 1}. {task['task']} - {status}")

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

def main1():
    while True:
        print("\nTask List Manager")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Remove Task")
        print("4. Complete Task")
        print("5. Exit")

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
        elif choice == "5":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

main1()


#grades

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

def main3():
    while True:
        print("\nStudent Grades Tracker")
        print("1. Add/Update Grade")
        print("2. View Grades")
        print("3. Remove Grade")
        print("4. Exit")

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
        elif choice == "4":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

main3()






#to do list

to_do_list = []

def add_task(task):
    to_do_list.append({"task": task, "completed": False})
    print(f"Added task: {task}")

def view_tasks():
    if not to_do_list:
        print("No tasks available.")
    for idx, task in enumerate(to_do_list):
        status = "Completed" if task["completed"] else "Pending"
        print(f"{idx + 1}. {task['task']} - {status}")

def complete_task(index):
    if 0 <= index < len(to_do_list):
        to_do_list[index]["completed"] = True
        print(f"Task marked as completed: {to_do_list[index]['task']}")
    else:
        print("Invalid task number.")

def main4():
    while True:
        print("\nSimple To-Do List")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Complete Task")
        print("4. Exit")

        choice = input("Enter choice: ").strip()

        if choice == "1":
            task = input("Enter task: ").strip()
            add_task(task)
        elif choice == "2":
            view_tasks()
        elif choice == "3":
            index = int(input("Enter task number to complete: ")) - 1
            complete_task(index)
        elif choice == "4":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

main4()







#calculator
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Error: Division by zero."

def main5():
    while True:
        print("\nBasic Calculator")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Exit")

        choice = input("Enter choice: ").strip()
        
        if choice in {"1", "2", "3", "4"}:
            x = float(input("Enter first number: "))
            y = float(input("Enter second number: "))

            if choice == "1":
                print(f"Result: {add(x, y)}")
            elif choice == "2":
                print(f"Result: {subtract(x, y)}")
            elif choice == "3":
                print(f"Result: {multiply(x, y)}")
            elif choice == "4":
                print(f"Result: {divide(x, y)}")
        elif choice == "5":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

main5()
"""