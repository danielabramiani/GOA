# Write a function that takes a maximum bound and returns all primes up to and including the maximum bound.

def is_prime(n):
    if n < 2:
        return []
    primes = []
    for num in range(2, n + 1):
        is_prime = True
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                is_prime =False
        if is_prime:
            primes.append(num)
            
    return primes

print(is_prime(11))