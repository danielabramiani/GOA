import time

email = "danielabramiani4@gmail.com"

phone_number = 557520755

password = "SNDNDNID*23$$$SNAKE"

name = "Daniel".lower()

last_name = "Abramiani".lower()

age = 13

def main_login():
    print("Hello Back! i want you to write yout email,phone number,password,name,last name, age")
    time.sleep(3)
    info_email = input("please enter your email: ")
    info_phone_number = input("please enter your phone number: ")
    info_password = input("please enter your password: ")
    info_name = input("please enter your name: ")
    info_last_name = input("please enter your last name: ")
    info_age = input("please enter yout age: ")
    
    if info_email == email:
        print("1/6")
    elif info_phone_number == phone_number:
        print("2/6")
    elif info_password == password:
        print("3/6")
    elif info_name == name:
        print("4/6")
    elif info_last_name == last_name:
        print("5/6")
    elif info_age == age:
        print("you done welcome home Daniel Abramiani")
    else:
        print("get out!!!!")
main_login()