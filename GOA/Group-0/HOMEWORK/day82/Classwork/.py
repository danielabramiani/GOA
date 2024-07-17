# accounts = []

# num_accounts = 3

# for i in range(num_accounts):
#     acc = {}
    
#     fullname = input("Enter full name: ")
#     mail = input("Enter email: ")
#     address = input("Enter address: ")
#     password = input("Enter password: ")
    
#     acc['fullname'] = fullname
#     acc['mail'] = mail
#     acc['address'] = address
#     acc['password'] = password
    
#     accounts.append(acc)

# for acc in accounts:
#     for key, value in acc.items():
#         print(f"{key}: {value}")
#     print()


#2

# def manual_items(input_dict):
#     items_list = []
#     for key, value in input_dict.items():
#         items_list.append((key, value))
#     return items_list

#3

def my_get(dictionary, key, default=None):
    if key in dictionary:
        return dictionary[key]
    else:
        return default