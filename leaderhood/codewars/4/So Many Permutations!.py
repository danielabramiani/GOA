def permutations(s):
    result = set([s])
    if len(s) == 2:
        result.add(s[1] + s[0])
        
    elif len(s) > 2:
        for i, c in enumerate(s):
            for perm in permutations(s[:i] + s[i + 1:]):
                result.add(c + perm)
    return list(result)
#https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/python