# You will receive a string which will contain words in PascalCase, your job is to convert them into snake_case.

def pascal_to_snake(word):
    snake = ""
    length = len(word)
    for i in range(length):
        char = word[i]
        if char.isupper() and i != 0 and word[i - 1] != " ":
            snake += "_"
        snake += char.lower()
    return snake.replace(" ", "_")

print(pascal_to_snake("TestController" ))
print(pascal_to_snake("1"))
print(pascal_to_snake("App7 Test"))