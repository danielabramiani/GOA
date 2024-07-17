#https://www.codewars.com/kata/5375f921003bf62192000746/train/python
#not end

def abbreviate(s):
    word = ''
    parts = []
    output = []
    
    for char in s:
        if char.isnumeric() or char.isalpha():
            word += char
        else:
            parts.append(word)
            parts.append(char)
            word = ''
    parts.append(word)
    
    for part in parts:
        length = len(part)
        if length > 3:
            abbreviate = part[0] + str(length - 2) + part[length - 1]
            output.append(abbreviate)
        else:
            output.append(part)
    return ''.join(output)