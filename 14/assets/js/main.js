const API_KEY = ''; // Put your API key here

$(document).ready(function () {
    const cities = ["Paris", "Florida", "Lviv", "Kyiv", "Berlin", "Tokyo", "Warsaw"];

    cookieStore.addEventListener('change', () => {
        if (!document.cookie.includes('validForecast=true')) {
            getValuesFromAPI();
        }
    });

    const createCookie = (name, value, expire) => {
        const date = new Date();

        date.setTime(date.getTime() + (expire * 60 * 60 * 1000));

        const expires = "expires=" + date.toUTCString();

        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    const fetchForecastForCity = async (cityName) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ua&appid=${API_KEY}`);

        return await response.json();
    }

    const renderSingleCity = (city, data) => {
        const wrapper = $('#list');

        const {main, weather, wind} = data;

        wrapper.append(`
                <div class="card col-6" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${city}</h5>
                    <p class="card-text">
                        <span class="badge bg-success">
                              ${weather[0].main}
                        </span>
                        <ul>
                            <li>Temperature: <b>${main.temp}&deg</b></li>    
                            <li>Feels like: ${main.feels_like}&deg</li>
                            <li>Max temperature: ${main.temp_max}&deg</li>
                            <li>Min temperature: ${main.temp_min}&deg</li>
                            <hr>
                            <li>Wind speed: ${wind.speed}</li>
                        </ul>
                    </p>
                  </div>
                </div>
            `);
    }

    const renderItems = () => {
        $('.card').remove();

        cities.map((city) => {
            const item = localStorage.getItem(city);

            if (item) {
                renderSingleCity(city, JSON.parse(item));
            }
        });
    }

    const getValuesFromAPI = () => {
        localStorage.clear();

        cities.map((city) => {
            fetchForecastForCity(city).then(data => {
                localStorage.setItem(city, JSON.stringify(data));

                renderSingleCity(city, data);
            });
        });

        createCookie('validForecast', 'true', 2);
        renderItems();
    }

    if (!document.cookie.includes('validForecast=true')) {
        getValuesFromAPI();
    } else {
        renderItems();
    }
});
