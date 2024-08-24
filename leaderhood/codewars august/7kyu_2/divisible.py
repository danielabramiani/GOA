#https://www.codewars.com/kata/558ee8415872565824000007/train/python

def is_divisible(n, *arg):
    for i in arg:
        if n % i != 0:
            return False
    else:
        return True
    pass
