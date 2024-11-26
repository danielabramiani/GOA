# import random

# def replace_odd_numberd_with_random_words(lst):
#     words = ["გამარჯობა", "ნახვამდის", "მოიგე", "წააგე", "როგორ ხარ"]
    
#     for i in range(len(lst)):
#         if lst[i] % 2 != 0:
#             lst[i] = random.choice(words)
#     return lst

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# print(replace_odd_numberd_with_random_words(numbers))

# def registration():
#         email = input('enter your email: ')
#         print(f'you email is {email}')
#         password = input('enter your password: ')
#         print(f"you password is {password}")
#         date = input('enter your date: ')
#         print(f'you date is {date}')
#         question = input('why do you love goa: ')
#         print(f"your email is {email}, yoru password is {password}, your date is {date}, your answer {question}")
# registration()

# name = input("Enter yout name: ")
# academy = input("Enter your academy: ")
# hobby = input("Enter Your Hobby :")

# print(f"{name}, {academy},{hobby}")


def even_numbers(lst):
    result = []
    for i in lst:
        if i % 2 == 0:
            result.append(i)
    print(result)
    
print(even_numbers([1,2,3,4,5,6,7,8,9,10]))