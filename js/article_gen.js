/*<div id="article1" class="article_cool_border">
        <div class="article_header">Article1</div>
        <div class="article_prev">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div> 
        <div class="artile_link">
            <a href="article1.html" class="row centered">...</a>
        </div>    
  </div>*/
let k = 0;
function makeList(arts) {
    let articles = document.getElementById("articles");
    arts.forEach(item => {
        k++;
        let article = document.createElement('div');
        if(k%2 == 0){article.classList.add("article_cool_border");}
        else {article.classList.add("article_cool_border1");}
        
        let title = document.createElement('div');
        title.classList.add("article_header");
        title.innerHTML = item.title;
        article.appendChild(title);
        
        let prev = document.createElement('div');
        prev.classList.add("article_prev");
        prev.innerHTML = item.article;
        article.appendChild(prev);

        let link = document.createElement('div');
        link.classList.add("article_link");
            let ref = document.createElement('a');
            ref.setAttribute('href', item.link);
            ref.innerHTML = 'read more...';
        link.appendChild(ref);
        article.appendChild(link);


          
        articles.appendChild(article);

    });
}
let arts = [
    {
        title: "Two dimensional arrays in C",
        article: "Существует ли какой-то универсальный параметр для передачи матрицы в функции в языке программирования С, такой, что может принять матрицу созданную как в стеке, так и на куче?",
        link: "articles/two-dimensional-arrays-in-c.html",
    }
]
makeList(arts);
 console.log(JSON.stringify(arts))