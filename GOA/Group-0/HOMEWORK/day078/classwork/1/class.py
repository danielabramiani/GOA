def manual_pop(lst, index=-1):
    new_lst = []
    for i in range(len(lst)):
        if i != index:
            new_lst.append(lst[i])
    return new_lst
