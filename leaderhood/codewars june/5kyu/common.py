def lcm(*args):
    def gcd(a, b):
        while b:
            a, b = b, a % b
        return a
    
    def lcm_two_numbers(x, y):
        return x * y // gcd(x, y)
    
    result = 1
    for num in args:
        result = lcm_two_numbers(result, num)
    return result