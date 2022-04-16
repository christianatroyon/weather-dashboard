
// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // replace `octocat` with anyone else's GitHub username
var requestUrl = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);
//     var lat = 56;
//     var lon = 124;

//     fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=7b6b8d369d01f838e24f3ae820d09dc9')
//     .then(function (response) {
//         return response.json();
//     }) .then(function (data) {
// console.log(data)
//     })

//     fetch('http://api.openweathermap.org/geo/1.0/direct?q=san diego&limit=1&APPID=7b6b8d369d01f838e24f3ae820d09dc9')
//     .then(function (response) {
//         return response.json();
//     }) .then(function (data) {
// console.log(data)
//     })
var city = "philadelphia";
var apiKey = "7b6b8d369d01f838e24f3ae820d09dc9";
var searchButton = document.querySelector("#fetch-button");
function search() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
        })
}

searchButton.addEventListener('click', function(){
    city = document.querySelector("#city-search").value;
    search()
})