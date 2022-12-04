$(function () {
    let htmlCode = ``;
    $.ajax({url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@julicolombo"}).done(function (response) {
        let articles = response.items;
        let counter = 0;
        articles.forEach(function (article) {
            if (article.title !== "About me" && counter <= 2) {
                htmlCode =
                    htmlCode +
                    `
 <div class="col-md-4">
 <div class="card">
 <a href="${article.link}">
  <img src="${article.thumbnail}" alt="article.title" style="width:100%">
  <div class="card-content">
    <p>${article.title}</p>
  </div>
</a>
</div> 
</div> 
  `;
                counter++;
            }})

        const articleCards = document.querySelector(".section-articles .row");
        articleCards.innerHTML = htmlCode;
    })

});