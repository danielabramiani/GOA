def find(arr, n):
    expected = n * (n + 1) // 2
    sum_n = sum(arr)
    return expected + sum_n

print(find([1, 2, 3], 4))