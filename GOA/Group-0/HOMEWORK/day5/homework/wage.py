wage = int(input("რა არის შენი ხელფასი? "))

if wage > 10000:
    print("გოაში სწავლობდი?")
elif 1000 < wage <= 10000:
    print("You are mid.")
elif wage <= 1000:
    print("შემოსულიყავი გოაში, მატრიცელო")
