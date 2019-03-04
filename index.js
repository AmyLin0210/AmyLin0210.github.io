let titleAbout = document.getElementById("title__tag--about");
let titleImpack = document.getElementById("title__tag--impack");
let titleMo = document.getElementById("title__tag--movement");

titleImpack.addEventListener("mouseover", function(){
    hideAll();
    showArticle( "impack" );
});

titleAbout.addEventListener("mouseover", function(){
    hideAll();
    showArticle( "about" );
});

titleMo.addEventListener("mouseover", function(){
    hideAll();
    showArticle( "movement" );
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

    temp = document.getElementsByClassName("content__image");
    for ( let n = 0; n < temp.length; ++n) {
        temp[n].classList.add("content__image--hidden");
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
    asideTag.classList.add("transition");

    let image = document.getElementById("image--" + articleId);
    image.classList.remove("content__image--hidden");
    asideTag.classList.add("transition");
}