export const getFiveDaysWeather = (weatherList) => {
const values = [0, 8, 16, 24, 32];
const newValues = [];
let checker = 0;

for (let i = 0; i < weatherList.length; i++) {
    if (values[checker] === i) {
        newValues.push(weatherList[i]);
        checker++
    }
}
    return newValues
}