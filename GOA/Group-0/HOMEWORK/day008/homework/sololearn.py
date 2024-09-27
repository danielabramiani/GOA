# List
n = [8, 42, 7, 0]
print(n)

# Nested list, matrix
m = [[1, 2, 3], [4, 5, 6]]
print(m)
print(m[0][2])

# String indexing
string = "My name is David"
print(string[4])

# Printing the sum of list items
numbers = [42, 8, 7, 1, 0, 124, 8897, 555, 3, 67, 99]
print(sum(numbers))

# Printing the last occurrence of "o" in a string
string = "Hello world!"
print(string[string.rfind('o')])

# Looping through words containing a specific letter
words = ["cat", "car", "code", "home", "learn", "fun", "job", "love", "friend", "zoo", "enjoy", "happiness", "family", "goal", "desire"]
letter = "o"
print([word for word in words if letter in word])

# Reversing a list
elements = ["Boron", "Potassium", "Chlorine", "Lead"]
reversed_elements = elements[::-1]
print(reversed_elements)
