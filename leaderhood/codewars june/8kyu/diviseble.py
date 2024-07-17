def divisible_by(numbers, divisor):
    result = []
    for i in numbers:
        if i % divisor == 0:
            result.append(i)
    return result
#https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/python