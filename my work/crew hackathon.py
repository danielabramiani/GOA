import random

leader0 = ["luka tamazashvili"]
leader1 = ["luka tatuashvili"]
leader2 = ["nika samkharadze"]
leader3 = ["andria gobejishvili"]
leader4 = ["deme azmaifarashvili"]

children = [
    "Davit Kuteleli",
    "Davit Beraiya",
    "Aleksandre Samušia",
    "Goga Asatiani",
    "Dimitri Ugrexelidze",
    "Giorgi Mamukashvili",
    "Giorgi Rusishvili",
    "Giorgi Rodonaia",
    "Giorgi Mamishašvili",
    "Giorgi Chqonidze",
    "Davit Mefarishvili",
    "Nikoloz Megrelishvili",
    "Sandro Surikovi",
    "Luka Keleptrishvili",
    "Mathe Khutsishvili",
    "Luka Chanashvili",
    "Davit Chokheli",
    "Nikoloz Iobidze",
    "Gurami Khurtsilava",
    "Nikoloz Asabashvili",
    "Victoria Sikharulidze",
    "Andria Efimovski",
    "Davit Aloev",
    "Keso Kareli",
    "Rafael Niguriani"
]

def randomize(leader_arr):
    while len(leader_arr) < 6 and children:
        student = random.choice(children)
        leader_arr.append(student)
        children.remove(student)

randomize(leader0)
randomize(leader1)
randomize(leader2)
randomize(leader3)

leader4.extend(children)

print(f"luka tamazashvili team: {leader0}")
print(f"luka tatuashvili team: {leader1}")
print(f"nika samkharadze team: {leader2}")
print(f"andria gobejishvili team: {leader3}")
print(f"deme azmaifarashvili team: {leader4}")

