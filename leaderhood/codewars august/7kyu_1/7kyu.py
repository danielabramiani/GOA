#https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/python

def multiply_all(arr):
    def multiply_by(num):
        result = [None] * len(arr)
        
        for i in range(len(arr)):
            for x in range(1):
                result[i] = arr[i] * num
        return result
    return multiply_by

multiplying_result = multiply_all([1, 2])(2)
print(multiplying_result)