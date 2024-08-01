def convert_list(string):
    words = string.split()
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
            
    return list(longest_word)

string_new = "Dani Giorgi!"
print(convert_list(string_new))

s = "My Name Is Daniel"
word = s.split()
print(word)

def sum_or_zero(numbers):
    result = []
    for number in numbers:
        if number % 2 == 0:
            result.append(number * number)
        else:
            result.append(number * 2)
    return result
    
list_number = [6, 7, 9, 10]
print(sum_or_zero(list_number))