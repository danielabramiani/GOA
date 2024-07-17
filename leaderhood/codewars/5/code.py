#https://www.codewars.com/kata/5266fba01283974e720000fa/train/python

def variance(numbers): 
    mean = sum(numbers) / len(numbers)
    return sum((number - mean) ** 2 for number in numbers) / len(numbers)