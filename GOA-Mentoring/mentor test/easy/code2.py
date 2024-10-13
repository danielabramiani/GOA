def longest(words):
    prefix = words[0]
    
    for w in words[1:]:
        while not w.startswith(prefix):
            prefix = prefix[:-1]
            if prefix == "":
                return ""
    return prefix
    
    
print(longest(["flower", "flow", "flight"]))
print(longest(["daniel", "Jamal", "Grisha"]))