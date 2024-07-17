def dig_pow(n, p):
    num = str(n)
    total = sum([int(num[i]) ** (p + i) for i in range(len(num))])
    return total / n if (total % n) == 0 else -1

#https://www.codewars.com/kata/5552101f47fc5178b1000050/train/python