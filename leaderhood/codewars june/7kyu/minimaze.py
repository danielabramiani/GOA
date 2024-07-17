def min_sum(arr):
    arr = sorted(arr)
    
    total = 0
    length = len(arr)
    
    for i in range(length // 2):
        total += arr[i] * arr[length - i -1]
    return total

#https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/python