# Create a program that checks if a given string is a palindrome (reads the same forward and backward). The function should ignore spaces, punctuation, and capitalization.

def palindrome(word):
    if word == word[::-1]:
        return True
    else:
        return False
    
print(palindrome("A man a plan a canal Panama"))
print(palindrome("Hello"))