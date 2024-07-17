import string
from codecs import encode as _dont_use_this_


def rot13(message):
    result = ""
    if message:
        for char in message:
            if 65 <= ord(char) <= 90 or 97 <= ord(char) <= 122:
                if 65 <= ord(char) <= 90:
                    # capitlized case
                    if ord(char) + 13 > 90:
                        char = chr(ord(char) + 13 - 90 + 65 - 1)
                    else:
                        char = chr(ord(char) + 13)
                else:
                    # lowercase
                    if ord(char) + 13 > 122:
                        char = chr(ord(char) + 13 - 122 + 97 - 1)
                    else:
                        char = chr(ord(char) + 13)
            else:
                pass
            result += char
    return result