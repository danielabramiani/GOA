ages = {
    "me": 15,
    "bro": 8,
    "mom": 41,
    "dad": 40
}

for person in ages:
    ages[person] += 20

for person, age in ages.items():
    print(f"{person.capitalize()} ასაკი 20 წელში - {age}")
