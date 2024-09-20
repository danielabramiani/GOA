def narcissistic( value ):
    value_str = str(value)
    num_digits = len(value_str)
    total_sum = 0
    
    for n in value_str:
        total_sum += int(n) ** num_digits
    
    return value == total_sum

def narcissistic( value ):
    value_str = str(value)
    num_digits = len(value_str)
    count = 0
    
    for n in value_str:
        count += int(n) ** num_digits
        
    return value == count