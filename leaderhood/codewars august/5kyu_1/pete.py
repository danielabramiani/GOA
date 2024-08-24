#https://www.codewars.com/kata/525c65e51bf619685c000059/train/python

def cakes(recipe, available):
    minialutistic_cakes = float('inf')
    
    for x, amount in recipe.items():
        if x not in available:
            return 0
        cakes = available[x] // amount
        minialutistic_cakes = min(minialutistic_cakes, cakes)
        
    return minialutistic_cakes