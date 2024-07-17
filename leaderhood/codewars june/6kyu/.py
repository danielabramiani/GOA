#https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/python

def parts_sums(ls):
    sums = [sum(ls)]
    
    for n in ls:
        last = sums[-1]
        
        current = last - n
        
        sums.append(current)
    return sums