def calculate_average(numbers):
    if not numbers:
        raise ValueError("The list of numbers cannot be empty.")
    
    total_sum = sum(numbers)
    count = len(numbers)
    average = total_sum / count
    return average

def main():
    numbers = [
        9, 8, 6, 8, 8, 7, 9, 8, 7, 7, 0,
        6, 6, 9, 7, 9, 5, 8, 6, 8, 8.5,
        9, 0, 9, 10, 9, 5, 10, 10, 8, 6
    ]
    
    try:
        avg = calculate_average(numbers)
        print(f"The average is: {avg:.2f}")
    except ValueError as e:
        print(f"Error: {e}")

main()
