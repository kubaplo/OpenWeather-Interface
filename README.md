# Preview
### Home page
![Home page preview](/preview/home.gif)
### Current weather
![Current weather preview](/preview/current_weather.gif)
### Notifications
![Notifications preview](/preview/notifications.gif)
### Responsiveness
![Responsiveness preview](/preview/responsiveness.gif)

# Usage
1. Create `.env` file in the project root folder with the following contents:
```
API_KEY=<YOUR OPENWEATHER API KEY>
```

2. Install dependencies using `pnpm` packet manager:
`pnpm install`

3. Launch the project in the development mode using: `pnpm dev`

4. Go to `localhost:3000` in your browser

# How to get the OpenWeather API key
OpenWeather API key can be obtained for free after signing up on the [official website](https://home.openweathermap.org/users/sign_up). The free tier allows for 1,000,000 API calls per month.

# Tech stack
This application was created using the following technologies:

1. React + Next.js
2. Typescript
3. Tailwind CSS

API requests are performed using Next.js feature called 'Server Actions'. It allows you to make requests on the server side. I decided to use this approach to not share the API key with the Client. Because of that, the website can be hosted publicly without the need to worry about leaking the key.

# TODO
1. **Dashboard** - it will allow you to automatically get current weather for your saved cities (favorite cities will be saved using the browser's local storage).
2. **5-day forecast** - it will allow you to get weather forecasts for specific cities for the next 5 days. Data will be presented on easy-to-read charts.
3. **Weather maps** - these will allow you to cover the map of a specific city with different meteorological layers.