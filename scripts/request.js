document.addEventListener('DOMContentLoaded', function() {
    alert('the api is deprecated, please look at the github repository code instead.')
    document.getElementById('locationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('locationInput').value;
        const weatherBox = document.getElementById('weatherBox');
        fetch('scripts/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'location=' + encodeURIComponent(location)
        })
        .then(response => response.json())
        .then(data => {
            document.querySelector('.location').textContent = data.location.name;
            document.querySelector('.date').textContent = new Date(data.location.localtime).toLocaleDateString();
            document.querySelector('.temperature').textContent = data.current.temp_c + '°C';
            document.querySelector('.weather').textContent = data.current.condition.text;
            document.querySelector('.wind').textContent = 'Wind: ' + data.current.wind_kph + ' kph';
            document.querySelector('.humidity').textContent = 'Humidity: ' + data.current.humidity + '%';
            document.querySelector('.weather-icon').src = data.current.condition.icon;
            weatherBox.classList.remove('hide');
            weatherBox.classList.add('fade-in');
            console.log(data);
            
        })
        .catch(error => console.error('Error fetching weather data:', error));
    });
});
