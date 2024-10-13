speed_1 = 6
speed_2 = 21
speed_3 = 3
wage = 420
speed_count = speed_1*1 + speed_2*2 + speed_3*3
if speed_count <= 20: wage_per_speed = 6.75
elif speed_count <= 25: wage_per_speed = 7
elif speed_count <= 30: wage_per_speed = 7.25
elif speed_count <= 35: wage_per_speed = 7.5
elif speed_count <= 40: wage_per_speed = 7.75
elif speed_count <= 45: wage_per_speed = 8
elif speed_count <= 50: wage_per_speed = 8.25
elif speed_count <= 55: wage_per_speed = 8.5
elif speed_count <= 60: wage_per_speed = 8.75
elif speed_count <= 65: wage_per_speed = 9
elif speed_count <= 70: wage_per_speed = 9.25
elif speed_count <= 75: wage_per_speed = 9.5
else: wage_per_speed = 9.75

new_wage = wage_per_speed * speed_count
wage_increasce = new_wage - wage

print(f"old wage {wage}")
print(f"new wage {new_wage}")
print(f"wage increacse {wage_increasce}")