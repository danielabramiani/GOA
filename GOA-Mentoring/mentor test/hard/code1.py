def mean(numbers1, numbers2):
    merged = sorted(numbers1 + numbers2)
    middle = len(merged) // 2
    if len(merged) % 2 == 0:
        return (merged[middle -1] + merged[middle]) / 2
    else:
        return merged[middle]
    
print(mean([1, 2, 3], [4, 5, 6])) #should equal 3.5