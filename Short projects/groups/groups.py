import random

leader0 = ["დავით ქუთელია"]
leader1 = ["ლუკა ტატუაშვილი"]
leader2 = ["ალექს ჭითანავა"]
leader3 = ["მათე ჩანადირი"]

kids = ["დემე აზმაიფარაშვილი", "თევდორე ჯანიაშვილი", "ლუკა თამაზაშვილი", "ილია ქსოვრელის",
"საბა ქუბაძე", "დავით ბერაია", "დავით ალოევი", "ალექსანდრე სამუშია", "გოგა ასათიანი", "ანდრია ეფიმოვსკი",
"დიმიტრი უგრეხელიძე"]

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
