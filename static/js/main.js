const base = "https://gnews.io/api/v4/";
const categories = ["headlines", "sport", "entertainment", "business", "arts", "world", "fashion"];

// For loop for itertating category-based function calls
// for (let i = 0; i < categories.length; i++) {
//     topic = categories[i];
//     document.getElementById(topic).addEventListener("click", apiCALL);
//     console.log(typeof(topic));
//         console.log(typeof(apiCALL));
// }

var url = new Object();
url.headlines = "top-headlines?&country=ie&token=";
url.sport = "search?q=sport&country=ie&token=";
url.entertainment = "search?q=entertainment&country=ie&token";
url.business = "search?q=business&country=ie&token=";
url.arts = "search?q=arts&country=ie&token=";
url.fashion = "search?q=fashion&country=ie&token=";
url.world = "search?q=world&country=ie&token=";
url.apikey = "21be1451239088fddf79953b709ddac0"; 
url.test = "headlines";

for ( let i = 0; i < url.length; i++){
for (let x in url){
     category = Object.keys(url);
     console.log(category[i]);
    //  document.getElementById(category[x]).addEventListener("click", apiCALL);
 
}
}
    //  document.getElementById(url.headlines).addEventListener("click", apiCALL);

function apiCALL() {

  fetch(
    base + url.headlines + url.apikey
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li> ${item.title} + <img id="newsimage" src= ${item.image}> </li>`;
            $("#articleList").css("list-style-type","none");
           document.getElementById("articleList").innerHTML = html;
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}


function sportCALL() {
  fetch(
    "https://gnews.io/api/v4/search?q=sport&country=ie&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li> ${item.title} + <img id="newsimage" src= ${item.image}> </li>`;
           document.getElementById("display").innerHTML = html;
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}

function entertainmentCALL() {
  fetch(
    "https://gnews.io/api/v4/search?q=entertainment&country=ie&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li> ${item.title} + <img id="newsimage" src= ${item.image}> </li>`;
           document.getElementById("articleList").innerHTML = html;
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}

function businessCALL() {
  fetch(
    "https://gnews.io/api/v4/search?q=business&country=ie&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
      html += `<li data-toggle="collapse" data-target="#description"> <b>${item.title}</b> <br> <div id="description" class="collapse">${item.description}</div><a href="${item.url}">More...</a> <br> <img id="newsimage" src= ${item.image}> </li>`;
           $("#articleList").css("list-style-type","none");
           document.getElementById("articleList").innerHTML = html;
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}

function artsCALL() {
  fetch(
    "https://gnews.io/api/v4/search?q=arts&country=ie&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li> ${item.title} + <img id="newsimage" src= ${item.image}> </li>`;
           document.getElementById("display").innerHTML = html;
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}

function fashionCALL() {
  fetch(
    "https://gnews.io/api/v4/search?q=fashion&country=ie&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li> ${item.title} + <img id="newsimage" src= ${item.image}> </li>`;
           document.getElementById("display").innerHTML = html;
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}

function worldCALL() {
  fetch(
    "https://gnews.io/api/v4/search?q=world&country=ie&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li id="nostyle"> ${item.title} + <img id="newsimage" src= ${item.image}> </li>`;
           document.getElementById("display").innerHTML = html;
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}