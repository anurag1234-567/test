// import { apikey } from './apikey.js';
const apikey= "517b047c496e4052835647d0d021d143";
var call = "https://newsapi.org/v2/top-headlines?country=in"
var apicall

var general = document.getElementById('general');
var technology = document.getElementById('technology');
var health = document.getElementById('health');
var business = document.getElementById('business');
var Sports = document.getElementById('Sports');
var header = document.getElementById('header');

apicall = `${call}&apikey=${apikey}`
displayNews(apicall)

general.addEventListener('click',()=>{
   apicall = `${call}&category=general&apikey=${apikey}`
   header.innerText="General"
   displayNews(apicall)
})

technology.addEventListener('click',()=>{
  apicall = `${call}&category=technology&apikey=${apikey}`
  header.innerText="Technology"
  displayNews(apicall)
})

health.addEventListener('click',()=>{
  apicall = `${call}&category=health&apikey=${apikey}`
  header.innerText="Health"
  displayNews(apicall)
})

business.addEventListener('click',()=>{
    apicall = `${call}&category=business&apikey=${apikey}`
    header.innerText="Business"
    displayNews(apicall)
})

Sports.addEventListener('click',()=>{
  apicall = `${call}&category=sports&apikey=${apikey}`
  header.innerText="Sports"
  displayNews(apicall)
})

function displayNews(apicall){
   fetch(apicall)
    .then( res=> res.json() )
    .then( data =>{
      var main = document.getElementById('main')
      main.innerHTML="";

      for(var i=0; i<data.articles.length; i++){
        var card = document.createElement('div');
        card.setAttribute('class','card');

        var cardbody = document.createElement('div')
        cardbody.setAttribute('class','cardbody');

        card.innerHTML = `<p class="title">${data.articles[i].title}</p>
        <p class="time">${data.articles[i].publishedAt}</p>
        <p class="content">${data.articles[i].content}</p>
        <button><a href="${data.articles[i].url}" target="_blank">Read More</a></button>`;

        if(data.articles[i].urlToImage != null){
          var img = document.createElement('img');
          img.src = data.articles[i].urlToImage; 
          img.target="_blank";
          cardbody.append(img);
        }

        cardbody.append(card);
        main.append(cardbody);
      }

    })
}


