# Create a program that receives a list and removes duplicate elements while maintaining the original order.

def remove(lst):
    unique_list = []
    for i in lst:
        if i not in unique_list:
            unique_list.append(i)
    return unique_list

print(remove([1, 2, 2, 3, 4, 4, 5]))
print(remove(['a', 'b', 'a', 'c']))