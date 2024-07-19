import time

email = "danielabramiani4@gmail.com"
phone_number = "557520755" 
password = "SNDNDNID*23$$$SNAKE"
name = "daniel"
last_name = "abramiani"
age = "13" 

def main_login():
    print("Hello! Please enter your email, phone number, password, name, last name, and age.")
    time.sleep(3)
    info_email = input("Please enter your email: ")
    info_phone_number = input("Please enter your phone number: ")
    info_password = input("Please enter your password: ")
    info_name = input("Please enter your name: ").lower()
    info_last_name = input("Please enter your last name: ").lower()
    info_age = input("Please enter your age: ")

    if info_email == email:
        print("1/6")
        if info_phone_number == phone_number:
            print("2/6")
            if info_password == password:
                print("3/6")
                if info_name == name:
                    print("4/6")
                    if info_last_name == last_name:
                        print("5/6")
                        if info_age == age:
                            print("Welcome home, Daniel Abramiani!")
                        else:
                            print("Incorrect age. Access denied.")
                    else:
                        print("Incorrect last name. Access denied.")
                else:
                    print("Incorrect name. Access denied.")
            else:
                print("Incorrect password. Access denied.")
        else:
            print("Incorrect phone number. Access denied.")
    else:
        print("Incorrect email. Access denied.")

main_login()