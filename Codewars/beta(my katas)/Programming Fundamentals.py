#https://www.codewars.com/kata/66db82af401d33623629bee7/train/python

#first solution

def analyze_number(num: int) -> str:
    if num == 0:
        return "zero"
    elif num > 0:
        return "positive" if num % 2 == 0 else "positive odd"
    else:
        return "negative" if num % 2 == 0 else "negative odd"
    
#second solution

def analyze_number(num: int) -> str:
    if num == 0:
        return "zero"
    is_even = (num % 2 == 0)
    
    if num > 0:
        if is_even:
            return "positive"
        else:
            return "positive odd"
    else:
        if is_even:
            return "negative"
        else:
            return "negative odd"
        
def process_values(a, b):
    print(abs(a) + abs(b))
    
print(process_values(-10, 5))