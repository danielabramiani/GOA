def binary_to_decimal(binary_str):
    decimal_value = 0
    length = len(binary_str)
    for i, digit in enumerate(binary_str):
        if digit == '1':
            decimal_value += 2 ** (length - i - 1)
    return decimal_value

def hexadecimal_to_decimal(hex_str):
    decimal_value = 0
    hex_digits = '0123456789ABCDEF'
    for i, digit in enumerate(reversed(hex_str)):
        decimal_value += hex_digits.index(digit.upper()) * (16 ** i)
    return decimal_value

binary_numbers = [
    "1010",
    "110110",
    "11010111",
    "011101010100100",
    "1110",
    "100100",
    "11010111",
    "011101010100100",
    "1010",
    "100011",
    "01110000",
    "10011111"
]

hex_numbers = [
    "A5",
    "3B",
    "FFFF",
    "D0000000",
    "4E",
    "7C",
    "ED3A",
    "403FB001"
]

print("Binary to Decimal:")
for binary in binary_numbers:
    print(f"{binary} = {binary_to_decimal(binary)}")

print("\nHexadecimal to Decimal:")
for hex_number in hex_numbers:
    print(f"{hex_number} = {hexadecimal_to_decimal(hex_number)}")
