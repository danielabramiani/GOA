# Create a program which receives a decimal number and converts it to binary.

def decimal_to_binary(n_dec):
    if n_dec == 0:
        return "0"
    
    bin = ""
    while n_dec > 0:
        remain = n_dec % 2
        bin = str(remain) + bin
        n_dec = n_dec //2
    return bin

print(decimal_to_binary(17))