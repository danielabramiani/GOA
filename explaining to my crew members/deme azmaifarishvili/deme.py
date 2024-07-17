print("")

print("Hello, welcome to GOA game!")

print("")

answear = input("are you ready to play (yes/no):") 
score = 0
total_q = 4
if answear.lower() == "yes":
    answear = input("1. Is GOA the best academy?:")
    if answear.lower() == "yes":
        score += 1
        print("Correct")
    else:
        print("Incorrect")


    answear = input("2. Which one: GOA or novator?:")
    if answear.lower() == "goa":
        score += 1
        print("Correct")
    else:
        print("Incorrect")

    answear = input("3. Is studying in GOA fun as well as interesting?: ")
    if answear.lower() == "yes":
        score += 1
        print("Correct")
    else:
        print("Incorrect")  

    answear = input("4. What is the enviorment like in GOA?:")
    if answear.lower() == "good" or "friendly":
        score +=1
        print("Correct")
    else:
       print("Incorrect")

print("Thank you for playing, you got " , score, "question correct.")
mark = (score/total_q) * 100

print("Mark: ", mark)
print("Goodbye")

#პროექტზე მუშაობდნენ:
#დემეტრე აზმაიფარაშვილი
#ლუკა ტატუაშვილი