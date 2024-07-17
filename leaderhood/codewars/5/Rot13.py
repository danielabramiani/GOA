#https://www.codewars.com/kata/530e15517bc88ac656000716/train/python
def rot13(message):
    result = ""
    if message:
        for char in message:
            if 65 <= ord(char) <= 90 or 97 <= ord(char) <= 122:
                if 65 <= ord(char) <= 90:
                    if ord(char) + 13 > 90:
                        char = chr(ord(char) + 13 - 90 + 65 - 1)
                    else:
                        char = chr(ord(char) + 13)
                else:
                    if ord(char) + 13 > 122:
                        char = chr(ord(char) + 13 - 122 + 97 -1)
                    else:
                        char = chr(ord(char) + 13)
            else:
                pass
            result += char
    return result