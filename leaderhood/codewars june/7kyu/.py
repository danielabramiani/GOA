def capitalize(s):
    number = ""
    num = ""
    
    index = 0
    while index < len(s):
        if index % 2 == 0:
            number += s[index].upper()
            num += s[index]
        else:
            number += s[index]
            num += s[index].upper()
        index += 1
    return [number,num]

#https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/python
