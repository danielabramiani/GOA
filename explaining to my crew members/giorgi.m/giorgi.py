list1 = [2, 51, 11, 13, 51, 100]
        #0  #1  #2  #3 #4    #5
        #-6 #-5 #-4 #-3 #-2  #-1
"""
1. Output every item from list with positive indexing.
2. Output every item from list with negative indexing.
3. Replace the last element of a list with a new value.
4. Replace the fifth element of a list with a new value.
5. Extract (ამოწერას ნიშნავს, slicing უნდა გამოიყენოთ) the last three elements of a list.
6. Extract the first three elements of a list.
7. Extract the middle two elements of a list. ([11, 13])
8. Extract random elements of a list with negative indexes.
"""
#1
list1[0]
list1[1]
list1[2]
list1[3]
list1[4]
list1[5]

#2
list1[-6]
list1[-5]
list1[-4]
list1[-3]
list1[-2]
list1[-1]

#3

list1[5] = 200

#4
list1[4] = 99

#5
list1[-3:]

#6
list1[:3]

#7
list1[2:4]

#8
list1[-1]
list1[-3]
