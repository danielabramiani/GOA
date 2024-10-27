# Create a program that receives an integer n and returns the first n numbers in the Fibonacci sequence. The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

def fibonacci(n):
    if n < 0:
        return []
    
    sequence = [0, 1]
    while len(sequence) < n:
        next_n = sequence[-1] + sequence[-2]
        sequence.append(next_n)
        
    return sequence[:n]

print(fibonacci(5))