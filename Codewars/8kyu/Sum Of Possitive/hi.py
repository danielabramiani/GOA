def positive_sum(arr):
    total = 0
    for num in arr:
        if num > 0:
            total = total + num
    
    return total