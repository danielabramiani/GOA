def happy_birthday(name, age):
    if name.lower() == "mate":
        print("Congratulations", name + ", Happy birthday! You are now", age, "years old!")

name = input("What's your name? ")
age = int(input("How old are you? "))

happy_birthday(name, age)
