
let axios = require("axios").default;

//fetch worldwide covid stats for cards initial state
export async function totalStats() {
  try {
    const response = await axios.get("https://covid19.mathdro.id/api");
    return response.data;
  }
  catch (e) {
    console.log(e);
  }
}

//fetch dailyStats for lineChart
export async function dailyData() {
  try {
    const response = await axios.get("https://covid19.mathdro.id/api/daily");
    return response.data;
  }
  catch (e) {
    console.log(e);
  }
}

//fetches the data of selected country
export async function fetchStats(country) {

  try {
    const response = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
    return response.data;
  }
  catch (e) {
    console.log(e);
  }

}

//fetches countryName
export async function fetchCountries() {

  try {
    const response = await axios.get('https://covid19.mathdro.id/api/countries');
    return response.data.countries.map((country) => country.name)
  }
  catch (e) {
    console.log(e);
  }


}