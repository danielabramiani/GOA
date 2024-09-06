#https://www.codewars.com/kata/66db7ff1bd6711231fdd680e/train/python

import math
import time

def calculate_factorial_time(n):
    if n < 0:
        return "Factorial is not defined for negative numbers", 0
    
    start_time = time.time()
    factorial_result = math.factorial(n)
    end_time = time.time()
    
    calculation_time = end_time - start_time
    return factorial_result, calculation_time