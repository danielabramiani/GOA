import calendar

year = 2024

for month in range(1, 13):
    month_calendar = calendar.month(year, month)
    
    if month == 10:
        month_calendar = month_calendar.replace(' 4 ', ' *4* ')
    
    print(month_calendar)