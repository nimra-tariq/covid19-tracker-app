// export function fetchProfileData() {
//   let userPromise = fetchUser();
//   let postsPromise = fetchPosts();
//   return {
//     user: wrapPromise(userPromise),
//     posts: wrapPromise(postsPromise)
//   };
// }


let axios = require("axios").default;

export function fetchData() {

  let options = {
    method: 'GET',
    url: 'https://covid19.mathdro.id/api/countries/pakistan',
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}


export function fetchCountries() {

let obj;
  let options = {
    method: 'GET',
    url: 'https://covid19.mathdro.id/api/countries',
  };

  axios.request(options).then(function (response) {
    obj=response.data;
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return obj;
}