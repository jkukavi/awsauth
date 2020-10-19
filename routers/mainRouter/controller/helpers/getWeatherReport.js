const axios = require("axios");

module.exports = async function getWeatherReport(city) {
  const weather = await getWeather(city);
  return weather.data.hourly;
};

//helpers

async function getWeather(city) {
  const response = await axios.get(getGeoLocationUrl(city));
  const [longitude, latitude] = response.data.features[0].center;
  const weather = await axios.get(getWeatherUrl(latitude, longitude));
  return weather;
}

const geolocationKey = process.env.GEOLOCATION_API_KEY;
const weatherKey = process.env.WEATHER_API_KEY;

function getGeoLocationUrl(city) {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    city +
    ".json?access_token=" +
    geolocationKey +
    "&limit=1";

  return url;
}

function getWeatherUrl(latitude, longitude) {
  const weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude}`;
  return weatherUrl;
}
