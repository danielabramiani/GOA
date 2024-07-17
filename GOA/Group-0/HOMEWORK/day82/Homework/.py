# 1. Find Duplicates
def find_duplicates(dictionary):
    keys_list = list(dictionary.keys())
    keys_list.sort()
    return keys_list

# 2. Find Maximum or Minimum Value
def find_max_min(dictionary, mode='max'):
    if mode == 'max':
        max_key = max(dictionary, key=dictionary.get)
        return max_key, dictionary[max_key]
    elif mode == 'min':
        min_key = min(dictionary, key=dictionary.get)
        return min_key, dictionary[min_key]
    else:
        return None

# 3. Combining Items
def combine_dicts(*dicts):
    combined_dict = {}
    for d in dicts:
        combined_dict.update(d)
    return combined_dict

# 4. Check for Key Existence
def check_key_existence(dictionary, key):
    return dictionary.get(key) is not None

# 5. Remove and Return Value
def remove_and_return(dictionary, key):
    return dictionary.pop(key, None)

# 6. Create a function called manual_keys
def manual_keys(dictionary):
    return list(dictionary.keys())

# 7. Create a function called manual_values
def manual_values(dictionary):
    return list(dictionary.values())

# 8. Create a function called manual_items
def manual_items(dictionary):
    return list(dictionary.items())

# 9. Create a function called manual_get
def manual_get(dictionary, key, default=None):
    return dictionary.get(key, default)

# 10. Create a function called manual_pop
def manual_pop(dictionary, key, default=None):
    return dictionary.pop(key, default)
