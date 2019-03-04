let titleAbout = document.getElementById("title__tag--about");
let titleImpack = document.getElementById("title__tag--impack");
let titleMo = document.getElementById;

titleImpack.addEventListener("click", function(){
    hideAll();
    showArticle( "impack" );
});

titleAbout.addEventListener("click", function(){
    hideAll();
    showArticle( "about" );
});

function hideAll() {  
    let temp = document.getElementsByClassName("content__article");
    for ( let n = 0; n < temp.length; ++n) {
        temp[n].classList.add("content__article--hidden");
    }

    temp = document.getElementsByClassName("tag__content--line");
    for ( let n = 0; n < temp.length; ++n) {
        temp[n].classList.add("tag__content--line-hidden");
    }

    temp = document.getElementsByClassName("tag__line");
    for ( let n = 0; n < temp.length; ++n) {
        temp[n].classList.add("tag__line--hidden");
    }

    temp = document.getElementsByClassName("tag__content");
    for ( let n = 0; n < temp.length; ++n) {
        temp[n].classList.add("tag__content--hidden");
    }
}

function showArticle( articleId ) {
    let tempArticle = document.getElementById("article--" + articleId);
    tempArticle.classList.remove("content__article--hidden");

    let tempLine = document.getElementById("tag__line--" + articleId);
    tempLine.classList.remove("tag__content--line-hidden");

    let asideLine = document.getElementById("aside__line--" + articleId);
    asideLine.classList.remove("tag__line--hidden");

    let asideTag = document.getElementById("aside__content--" + articleId);
    asideTag.classList.remove("tag__content--hidden");
}