#list

brands = ["Honda", "Toyota", "BMW", "Mercedes"]

print(brands[-3:-1])


animals = ['cat', 'dog', 'bird']

print(animals[1])


#functions

def my_function():
  print("Hello from a function")

my_function()

def my_function(fname):
  print("Hello, " + fname)

my_function("Daniel")

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

#String format() Method

txt = "For only {price:.2f} dollars!"
print(txt.format(price = 49))

def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

phone_number = create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
print(phone_number)

def create_date_birth(year, date, month):
    return "{} {}  {}".format(date, year, month)

my_birth = create_date_birth(["2010", "4", "Octomber"])
print(my_birth)

#List extend() Method

fruit = ['apple', 'banana', 'cherry']

cars = ['Ford', 'BMW', 'Volvo']

fruit.extend(cars)

print(fruit)

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

#print() Function





x = ("apple", "banana", "cherry")
print(x)

def myfunction():
  print(3+3)










#return statement

def myfunction():
  return 3+3

print(myfunction())








#sorted() Function

a = ("b", "g", "a", "d", "f", "c", "h", "e")
x = sorted(a)
print(x)

def switch_gravity(d, arr):
    if d == 'R':
        return sorted(arr)
    elif d == 'L':
        return sorted(arr, reverse=True)

print(switch_gravity('R', [3, 2, 1, 2]))


#List count() Method

fruits = ['apple', 'banana', 'cherry']

x = fruits.count("cherry")

def well(x):
    good_count = x.count('good')
    
    if good_count == 0:
        return 'Fail!'
    elif good_count <= 2:
        return 'Publish!'
    else:
        return 'I smell a series!'




#for ... in

fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x) 
  
for word in "banana":
  print(word)
  
fruits = ["apple", "banana", "cherry"]
for some in s:
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
  
print(len(thisdict))

# def create_phone_number(n):
#     return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
#without dict


#with dict

def create_phone_number_dict(phone_dict):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(
        phone_dict['a1'], phone_dict['a2'], phone_dict['a3'],
        phone_dict['b1'], phone_dict['b2'], phone_dict['b3'],
        phone_dict['c1'], phone_dict['c2'], phone_dict['c3'], phone_dict['c4']
    )

phone_dict = {
    'a1': 1, 'a2': 2, 'a3': 3,
    'b1': 4, 'b2': 5, 'b3': 6,
    'c1': 7, 'c2': 8, 'c3': 9, 'c4': 0
}

phone_number_dict = create_phone_number_dict(phone_dict)
print(phone_number_dict)

  
  
#bin() Function

number = 891392
bin(number)

def count_bits(n):
    return bin(n).count("1")
  
count_bits(29329)
  
print(count_bits)



#map() Function

def myfunc(n):
  return len(n)

x = map(myfunc, ('apple', 'banana', 'cherry'))

def myfunc(a, b):
  return a + b

x = map(myfunc, ('apple', 'banana', 'cherry'), ('orange', 'lemon', 'pineapple'))

#Dictionary get() Method

car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.get("model")

print(x)

def traffic_light(current_state):
    state_transitions = {
        "green": "yellow",
        "yellow": "red",
        "red": "green"
    }
    
    return state_transitions.get(current_state, "Invalid state")
  
#not keyword

x = False

print(not x)

def is_not_even(number):
    return not (number % 2 == 0)

print(is_not_even(4))
  
#sorted() Function

a = ("b", "g", "a", "d", "f", "c", "h", "e")
x = sorted(a)
print(x)

#using in function
def myfunc(n):
  return abs(10-n)

a = (5, 3, 1, 11, 2, 12, 17)
x = sorted(a, key=myfunc)
print(x)










#isinstance() Function

x = isinstance(5, int)

print(x)

#using in functions
def sum_array(arr):
    total_sum = 0
    for item in arr:
        if isinstance(item, str):
            item = int(item)
        total_sum += item
    return total_sum
  
  
#Lambda

x = lambda a: a + 10
print(x(5))


#using lambda in function

def sum_array(arr):
    return sum(map(lambda x: int(x), arr))
  
print(sum_array([1, '2', 3, '4']))

operations = [
    lambda x: x + 1,  
    lambda x: x - 1,  
    lambda x: x * 2,  
    lambda x: x / 2   
]

number = 10

results = [op(number) for op in operations]
print(results)


#ord() Function

#The ord() function returns the number representing the unicode code of a specified character.
"""
Syntax
ord(character)
"""

"""
Parameter Values
Parameter - Description
character - String, any character
"""
x = ord("h")

print(x)
#Return the integer that represents the character "h":

#List Comprehension

#without List Comprehension

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist)

#with List Comprehension


fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x for x in fruits if "a" in x]

print(newlist)


#without List Comprehension2

def powers_of_two(n):
    result = []
    for i in range(n + 1):
        result.append(2 ** i)
    return result

#with List Comprehension2

def powers_of_two(n):
    return [2 ** i for i in range(n + 1)]





#Classes and Objects

class MyClass:
  x = 5

print(MyClass)



#Create a class named Person, use the __init__() function to assign values for name and age:




class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)




"""
The __str__() Function
The __str__() function controls what should be returned when the class object is represented as a string.

If the __str__() function is not set, the string representation of the object is returned:
"""

"""
The __init__() Function
The examples above are classes and objects in their simplest form, and are not really useful in real life applications.

To understand the meaning of classes we have to understand the built-in __init__() function.

All classes have a function called __init__(), which is always executed when the class is being initiated.

Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created:

The self Parameter
The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.

It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:
"""

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1)


#codewars

class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew
    
    def is_worth_it(self):
        crew_weight = self.crew * 1.5
        effective_draft = self.draft - crew_weight
        return effective_draft > 20



class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()


#codewars

import random

class Ghost:
    def __init__(self):
        colors = ["white", "yellow", "purple", "red"]
        self.color = random.choice(colors)
