def array_diff(a, b):
    new_arr = []
    for element in a:
        if element not in b:
            new_arr.append(element)
    return new_arr
