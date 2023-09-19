const apiKey = '9988b93aeadd4eb39d3173145231809';

function getWeather() {
  const city = document.getElementById('city').value;

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  $.ajax({
    url: apiUrl,
    type: 'GET',
    success: function(data) {
      displayWeather(data);
    },
    error: function(xhr, status, error) {
      console.error('Произошла ошибка:', status, error);
    }
  });
}

function displayWeather(data) {
  const weatherInfo = $('#weather-info');
  weatherInfo.empty();

  console.log(data);
  const cityName = data.location.name;
  const temperature = data.current.temp_c; // Температура в градусах Цельсия
  const weatherDescription = data.current.condition.text;
 const time = data.location.localtime;
  const infoDiv = $('<div>');
  
  infoDiv.text(`City: ${cityName}, Temperature: ${temperature}°C, Description: ${weatherDescription}  time ${time}`);
  weatherInfo.append(infoDiv);
}



