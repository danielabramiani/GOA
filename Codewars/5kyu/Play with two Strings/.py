def work_on_strings(a, b):
    modified_a = ''.join([(char.swapcase() if b.lower().count(char.lower()) % 2 == 1 else char) for char in a])
    modified_b = ''.join([(char.swapcase() if a.lower().count(char.lower()) % 2 == 1 else char) for char in b])
    return modified_a + modified_b
