def find_smallest_int(arr):
    """Find the smallest integer in a given list."""
    return min(arr)

def summation(num):
    """Calculate the sum of all integers from 1 to the given number."""
    total = 0
    for x in range(1, num + 1): 
        total += x
    return total
