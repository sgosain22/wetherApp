 fetch('https://api.openweathermap.org/data/2.5/forecast?q=mohali&units=metric&appid=56d6cb4edc01e1c035ad557f2cab09f7')
    .then(response => response.json())
    .then(data => console.log(data));

function(){
    
}