# # def count_even(numbers):
# #     result = []
# #     for i in numbers:
# #         if i % 2 == 1:
# #             result.append(i)
# #     return result

# # list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# # print(count_even(list1))


# # #+,-,*,/,//,%

# # print(1+5) #მიმატება
# # print(5-1) #გამოკლება
# # print(2*2) #გამრავლება
# # print(3/2) #გაყოფა
# # print(3//2) #უწილადო გაყოფა
# # print(3%2) #ნაშთიანი გაყოფა

# def sum_of_list(numbers_of_list):
#     count = 0
#     for num in numbers_of_list:
#         count += num
#     return count
# list1 = [1, 2, 3, 4, 5]
# print(sum_of_list(list1)) # 15

# #ეტაპები ფუნქციის შექმნისას
# #1)ვქმნით ფუნქციას def-ის გამოყენებით
# #2)ვარქმევთ ფუნქციას შესაბამის სახელს ანუ თუ უნდა დავთვალოთ ლისტის ელემენტების რაოდენობა ვარქმევთ count_list
# #3)ვაძლევთ ფუნქციას არგუმენტს არგუმენტი იგივეა რაც ცვლადის მნიშვნელობა 

# def mother(age):
#     return "Ninuca is " + str(age) + " years old"

# def mother_after_10(age_after):
#     return "Ninuca is " + str(age_after) + " years old"

# print(mother(31))
# print("after 10 years old " + mother_after_10  (31+10))

# def word_count(words):
#     words = words.split()
#     return len(words)

# text = "this is my house"
# print(word_count(text))

# def calculator(num1,opperation,num2):
#     if opperation == "+":
#         print(num1 + num2)
#     elif opperation == "-":
#         print(num1 - num2)
#     elif opperation == "*":
#         print(num1 * num2)
#     elif opperation == "//":
#         print(num1 // num2)
#     else:
#         print("nothing")
        
        
# print(calculator(5, "+", 5))
# print(calculator(5, "-", 5))
# print(calculator(5, "//", 5))
# print(calculator(5, "*", 5))


#string mehtods

#capitalize

# name = "gurami"
# name_capitalized = name.capitalize()
# print(name_capitalized)

# #upper
# name = "gurami"
# name_uppered = name.upper()
# print(name_uppered)

# #strip
# name = "     daniel     "
# name_striped = name.strip()
# print(name_striped)

# #replace
# name = "gurami"  
# name_replaced = name.replace("gurami", "daniel")
# print(name_replaced)

def replace(x):
    return x.replace(" ", "")

print(replace("  da ni el"))