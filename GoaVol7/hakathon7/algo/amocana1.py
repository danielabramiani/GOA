# მოცემულია რიცხვითი მასივი და მოცემულია ცალკე კიდევ ერ-
# თი რიცხვი. იპოვეთ არის თუ არა მასივში ორი რიცხვი, რომელ-
# თა ჯამი ეს ცალკე მოცემული მნიშვნელობაა.
def algorithm1(arr, num):
    for i in range(len(arr)):
        if arr[1] + arr[2] == num:
            return True
        else:
            return False

print(algorithm1([1,4,5,6], 9))