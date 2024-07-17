#https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/python

def dating_range(age):
    min = age // 2 + 7 
    max = (age - 7) * 2
    return min + "-" + max