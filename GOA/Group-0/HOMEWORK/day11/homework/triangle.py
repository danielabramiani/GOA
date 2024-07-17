def triangle_checker(side1, side2, side3):
    try:
        side1 = float(side1)
        side2 = float(side2)
        side3 = float(side3)
        
        if side1 + side2 > side3 and side1 + side3 > side2 and side2 + side3 > side1:
            print("Triangle is valid")
        else:
            print("Triangle is not valid")
    except ValueError:
        print("Please enter valid numeric values for the sides.")

side1 = input("First side: ")
side2 = input("Second side: ")
side3 = input("Third side: ")

triangle_checker(side1, side2, side3)