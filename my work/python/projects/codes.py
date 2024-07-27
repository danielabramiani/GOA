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