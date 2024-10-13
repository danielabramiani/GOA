def unique(numbers, target):
    result = []
    for n in range(len(numbers)):
        for x in range(n + 1, len(numbers)):
            if numbers[n] + numbers[x] == target:
                found = False
                for p in result:
                    if (p[0] == numbers[n] and p[1] == numbers[x]):
                        found = True
                if not found:
                    result.append((numbers[n], numbers[x]))
    return result

print(unique([1, 2, 3, 2, 4], 5)) #should equal [(1, 4), (2, 3), (3, 2)]
print(unique([1, 2, 3, 2], 4)) #should equal [(1, 3), (2, 2)]