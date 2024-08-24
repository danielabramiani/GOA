#https://www.codewars.com/kata/55a29405bc7d2efaff00007c/train/python

def going(n):
    factorial1 =1
    factorial2 =0
    for i in range(1,n+1):
        factorial1 *= i
        factorial2 += factorial1
    return factorial2 / factorial1