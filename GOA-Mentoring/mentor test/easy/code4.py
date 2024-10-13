def dibonacci_iterative(num_it):
    a = 0
    b = 1
    for p in range(num_it):
        speed = a + b
        a = b
        b = speed
    return a

print(dibonacci_iterative(0))
print(dibonacci_iterative(4))
print(dibonacci_iterative(20))
print(dibonacci_iterative(10))

def dibonacci_recursive(num_re):
    if num_re <= 1:
        return num_re
    return dibonacci_recursive(num_re - 1) + dibonacci_recursive(num_re - 2)

print(dibonacci_recursive(0))
print(dibonacci_recursive(4))
print(dibonacci_recursive(20))
print(dibonacci_recursive(10))