# 1
def merge_lists(list_one, list_two):
    merged = list_one.copy()
    for item in list_two:
        if item not in merged:
            merged.append(item)
    return merged

print(merge_lists([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))

# 2
def square_list(input_list):
    return [x**2 for x in input_list]

print(square_list([1, 2, 3, 4, 5]))

# 3
def odd_numbers(input_list):
    return [x for x in input_list if x % 2 != 0]

print(odd_numbers([1, 2, 3, 4, 5]))

# 4
def common_elements(list_one, list_two):
    return list(set(list_one) & set(list_two))

print(common_elements([1, 2, 3, 4, 5, 5], [3, 4, 5, 5, 6, 7]))

# 5
def remove_duplicates(input_list):
    result_list = []
    for item in input_list:
        if input_list.count(item) < 2:
            result_list.append(item)
    return result_list

print(remove_duplicates([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8]))

# 6
def merge_dicts(dict1, dict2):
    result_dict = dict1.copy()
    for key, value in dict2.items():
        result_dict[key] = value
    return result_dict

dict1 = {"a": 10, "b": 20, "c": 30, "d": 40}
dict2 = {"c": 130, "d": 140, "e": 150, "f": 160}
print(merge_dicts(dict1, dict2))

# 7
def squared_dict_values(input_dict):
    return {k: v**2 for k, v in input_dict.items()}

dict3 = {"a": 10, "b": 20, "c": "g", "d": "k", "e": 10, "f": 10}
print(squared_dict_values(dict3))

# 8
def dict_keys_to_list(input_dict):
    return list(input_dict.keys())

print(dict_keys_to_list(dict3))

# 9
def word_frequency_counter(user_str):
    words = user_str.split()
    frequency = {}
    for word in words:
        frequency[word] = frequency.get(word, 0) + 1
    return frequency

print(word_frequency_counter("this is a test text to test text frequency"))

# 10
def dictionary_filter(input_dict, value):
    return {k: v for k, v in input_dict.items() if v == value}

dict3 = {"a": 10, "b": 20, "c": "g", "d": "k", "e": 10, "f": 10}
print(dictionary_filter(dict3, 10))

# 11. Factorial Function
def factorial(number):
    if number < 0:
        return "Factorial is not defined for negative numbers"
    elif number == 0:
        return 1
    else:
        product = 1
        for i in range(2, number + 1):
            product *= i
        return product

print(factorial(5))

# 12. Palindrome Checker
def check_palindrome(user_str):
    return user_str == user_str[::-1]

print(check_palindrome("rotor"))
print(check_palindrome("civic"))
print(check_palindrome("car"))

# 13. Anagram Checker
def anagram_checker(input1, input2):
    def count_chars(string):
        char_count = {}
        for char in string:
            char_count[char] = char_count.get(char, 0) + 1
        return char_count
    
    return count_chars(input1) == count_chars(input2)

print(anagram_checker("Hello", "Hello"))
print(anagram_checker("ello", "Hello"))
print(anagram_checker("Helo", "Hello"))

# 14. Sentence Reversal
def sentence_reversal(user_input):
    return " ".join(reversed(user_input.split(" ")))

print(sentence_reversal("Hello world"))

# 15. To-Do List
def to_do_list():
    tasks = {}
    while True:
        print("Your current tasks:", tasks)
        action = input("Add, Edit, or Remove task? (Type 'exit' to quit): ").lower()
        if action == "exit":
            break
        elif action == "add" or action == "edit":
            task_name = input("Enter task name: ")
            task_description = input("Enter task description: ")
            tasks[task_name] = task_description
        elif action == "remove":
            task_name = input("Enter task name to remove: ")
            if task_name in tasks:
                del tasks[task_name]
            else:
                print("Task not found.")
        else:
            print("Invalid action.")

# 16. Merge Lists into Dictionary
def merged_list_to_dict(key_list, value_list):
    return dict(zip(key_list, value_list))

print(merged_list_to_dict(["a", "b", "c", "d"], [10, 20, 30, 40]))

# 17. Check if Key Exists in Dictionary
def key_in_dict(input_dict, key):
    return input_dict.get(key, "Key not found")

print(key_in_dict(dict3, "a"))

# 18. Sum of Values as Key in Dictionary
def sum_values_as_key(input_dict):
    result_dict = {}
    for key, value in input_dict.items():
        result_dict[sum(value)] = value
    return result_dict

dict4 = {"a": [1, 2, 3, 4, 5], "b": [2, 4, 6, 8], "c": [1, 3, 5, 7]}
print(sum_values_as_key(dict4))

# 19. Split List Based on a Number
def split_list(input_list, split_num):
    less_than = []
    greater_than_equal = []
    for num in input_list:
        if num < split_num:
            less_than.append(num)
        else:
            greater_than_equal.append(num)
    return {"less_than": less_than, "greater_than_equal": greater_than_equal}

print(split_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

# 20. List Intersection
def list_intersection(list1, list2):
    return [item for item in list1 if item in list2]

print(list_intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))
