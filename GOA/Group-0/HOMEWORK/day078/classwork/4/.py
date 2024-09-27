def user_registration():
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    city = input("Enter your city: ")
    occupation = input("Enter your occupation: ")
    return {
        "name": name,
        "age": age,
        "city": city,
        "occupation": occupation
    }
user_data = user_registration()

def fetch_dependency(dependencies, key):
    return dependencies.get(key, "Key not found")

dependencies = {
    "Python": "Programming language",
    "Html": "Mark up language",
    "js": "programing language",
}

dependency_key = input("Enter the dependency you want to fetch: ")
result = fetch_dependency(dependencies, dependency_key)
print(result)
