#day1
#recources
"""
#შევქმენით name ცვლადი რომ ჩავწეროთ ჩვენი სახელი
name = "gocha"
#დავბეჭდეთ რომ "ჩემი სახელია გოჩა"
print("My name is: " + name)

#კომენტარი გამოიყენება იმისთვის რომ ჩვენი კოდი ეტაპობრივად დავალაგოთ
#და ავხსნათ მოკლედ

multiply line comment

#classic comment - ჩოულებრივი კომენტარი

#print - ფუნქცია რომლის დახმარებით ვბეჭდავთ

#multiply line comment - მრავალი ხაზის კომენტარი

# =(ტოლობა) - მინიჭების ოპერატორი
"""

#day0
"""
from turtle import * #ბიბლიოთეკა რომლის დახმარებითაც ვხატავთ
#we want to paint a house

#step 1: draw a square

speed(1)

width(8)
color("blue")
forward(200)
left(90)
#left90 - არის 90 გრადუსით შემოტრიალება რომ ზევით ან გვერდით წავიდეს

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)

color("brown")
left(90)
forward(120)  #height of the door/კარების სიმაღლე
right(90)
forward(60)
right(90)
forward(120)

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
exitonclick()
"""

#მინიჭების ოპერატორი არის = ეს გამოიყენება იმისთვის რომ ცვლადს მნიშნელობა მივცე

#კომენტარი გამოიყენება იმისთვის რომ ჩვენი კოდი ეტაპობრივად დავალაგოთ
#და ავხსნათ მოკლედ აისახება დიეზით ანუ #


#string არის ბრჭყალებში დაწერილი წინადადება იმისთვის გამოიყენება რომ შევქმნათ ტექსტი
#მაგალითად

# print("gocha")

#integer არის ისეთი მონაცემთა ტიპი რომელიც არის ციფრი
#მაგალითად:

# age = 10
# print(age)

#ცვლადის შექმნის ეტაპები
#1)ვწერთ სახელს მაგალითად age
#2)ვანიჭებთ მნიშვნელობას მინიჭების ოპერატორით მინიჭების ოპერატორი არის =
#3)ვწერთ მნიშვნელობას მაგალიტად: 10 ანუ age = 10/ასაკი = 10

name = "gocha"
age = "10"

print(name + " " + age)
