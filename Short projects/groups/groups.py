import random

leader0 = ["დავით ქუთელია"]
leader1 = ["ლუკა ტატუაშვილი"]
leader2 = ["ალექს ჭითანავა"]
leader3 = ["მათე ჩანადირი"]

kids = ["დემე აზმაიფარაშვილი", "თევდორე ჯანიაშვილი", "ლუკა თამაზაშვილი", "ილია ქსოვრელის",
"საბა ქუბაძე", "დავით ბერაია", "დავით ალოევი", "ალექსანდრე სამუშია", "გოგა ასათიანი", "ანდრია ეფიმოვსკი",
"დიმიტრი უგრეხელიძე", "გრიშა გოგიჩაშვილი"]

def random_selection(leader_arr):
    for i in range(3):
        student = random.choice(kids)
        leader_arr.append(student)
        kids.remove(student)

random_selection(leader0)
random_selection(leader1)
random_selection(leader2)
leader3 = leader3 + kids

print(f"დავით ქუთელიას გუნდი: {leader0}")
print(f"ლუკა ტატუაშვილის გუნდი: {leader1}")
print(f"ალექს ჭითანავას გუნდი: {leader2}")
print(f"მათე ჩანადირის გუნდი: {leader3}")


# Davit_kutelia_team = ["დავით ბერაია", "გოგა ასათიანი", "ანდრია ეფიმოვსკი"]
# luka_tatuashvili_team = ["ილია ქსოვრელი", "დავით ალოევი", "საბა ქუბაძე"]
# alex_chitanava_team = ["დიმიტრი უგრეხელიძე", "ალექსანდრე სამუშია"]
# mate_chanadiri_team = ["დემე აზმაიფარაშვილი", "თევდორე ჯანიაშვილი", "გიორგი რუსიშვილი"]
# luka_tamazashvili_team = ["გიორგი როდონაია", "გიორგი მამუკაშვილი"]