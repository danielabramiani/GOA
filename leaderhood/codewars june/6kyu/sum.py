#https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/python
#not
def sum_consecutives(lst):
    result = []
    
    for num in lst:
        str_num = str(num)
        
        digits = 0
        
        for i in range(len(str_num)):
            digit = int(str_num[i])
            jeremy = i + 1
            digits += digit ** jeremy
            
        if digits == num:
            result.append(num)
    return result