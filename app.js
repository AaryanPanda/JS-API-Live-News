// Progression 1: create a function and fetch the api using axios
axios.get('https://gnews.io/api/v4/search?q=example&apikey=96dc9efaf9eeb197f1e9ec6b372fd772')
.then(result => {
  result.data.articles.forEach((article) => {
    document.getElementById("container").innerHTML += `<div class="news-div">
    <div class="title">${article.title}</div>
    <div ><img class="image" src="${article.image}" alt=""></div>
    <div class="content">${article.content}</div>
  </div>`
  })
})
.catch(error => console.log(error))