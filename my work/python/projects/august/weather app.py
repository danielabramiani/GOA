import requests

def get_weather(city):
    api_key = 'your_api_key'
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)
    data = response.json()
    if data['cod'] == 200:
        main = data['main']
        weather = data['weather'][0]
        print(f"Temperature: {main['temp']}°C")
        print(f"Weather: {weather['description']}")
    else:
        print("City not found")

city = input("Enter city name: ")
get_weather(city)
