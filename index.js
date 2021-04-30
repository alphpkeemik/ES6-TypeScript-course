// do in browser console!
fetch('https://www.metaweather.com/api/location/search/?query=San')
    .then(response => response.json())
    .then(console.log)