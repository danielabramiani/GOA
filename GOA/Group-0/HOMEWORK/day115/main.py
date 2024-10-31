import string

def main(user_num, base_sys, pref_sys):
    if base_sys not in {2, 8, 10, 16} or pref_sys not in {2, 8, 10, 16}:
        return "Invalid base or preferred system."
    dec_val = int(user_num) if base_sys == 10 else sum((10 + string.ascii_uppercase.index(i) if i in 'ABCDEF' else int(i)) * base_sys ** idx for idx, i in enumerate(reversed(user_num.upper())))
    return dec_to_system(dec_val, pref_sys) if pref_sys != 10 else dec_val

def dec_to_system(num, system):
    return "0" if num == 0 else ''.join(reversed([string.hexdigits[num := num // system % 16] for _ in iter(int, num)]))

def get_user_input():
    while True:
        try:
            user_num = input("Enter your number: ")
            base_sys = int(input("Current system? (2 | 8 | 10 | 16): "))
            pref_sys = int(input("Convert to system? (2 | 8 | 10 | 16): "))
            return user_num, base_sys, pref_sys
        except ValueError:
            print("Invalid input. Please enter numeric values.")

user_num, base_sys, pref_sys = get_user_input()
print(main(user_num, base_sys, pref_sys))
