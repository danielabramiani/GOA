#https://www.codewars.com/kata/51edd51599a189fe7f000015/train/python

def solution(array_a, array_b):
    sum = 0
    
    for i in range(len(array_a)):
        difference = (array_b[i] - array_a[i]) ** 2
        
        sum += difference
        
    average = sum / len(array_a)
        
    return average