console.log("script added")

// Initilize the api variables
let api_key = "30a29231e6f3434382c0df1e2b2856f8"
let source = "bbc-news"


let multiCollapseExample2 = document.getElementById("multiCollapseExample2")
// create an ajax  get request 
let xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`, true);
xhr.getResponseHeader("content-type", "application/json")
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        // console.log(articles)
        let newshtml = "";
        articles.forEach(function (element) {
                let news = `
                        <div class="row">
                        <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body">
                            <div class="alert alert-success" role="alert">
                            ${element.title}
                            </div>
                           ${element.description}<br>
                           <a  href="${element.url}" target="_blank" > Read more Here</a>
                           <br>
                           BY: ${element.author}
                            </div>
                            
                        </div>
                        </div>
                        </div>`
                newshtml += news;
            });
            multiCollapseExample2.innerHTML = newshtml
        }
    else {
        console.log("API Request Failure")
    }
}
xhr.send()

// function close_button(){
//     document.getElementById("close_now").innerText= "CLose.";
// }

// function revert(){
//     document.getElementById("close_now").innerText ="See The Latest Happenings";
   
// }