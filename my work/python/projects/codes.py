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
  
  
#project with given recources

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