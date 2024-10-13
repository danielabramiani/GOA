def majority(numbers):
    count = 0
    empty = None
    
    for n in numbers:
        if count == 0:
            empty = n
        if n == empty:
            count += 1
        else:
            count -= 1
    return empty

print(majority([3, 2, 3])) #should equal 3
print(majority([2, 2, 1, 1, 2])) #should equal 2 