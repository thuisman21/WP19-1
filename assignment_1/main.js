function changeTitle() {
    document.title = "Webprogramming (LIX019P05)"
}

function newArticle() {
    var art = document.createElement("article");
    var head = document.createElement("h1");
    var paragraph = document.createElement("p");
    art.appendChild(head);
    art.appendChild(paragraph);
    var element = document.getElementById("col-md-12");
    element.appendChild(art);
}

function replaceLink() {
    var link = document.getElementsByTagName("li");
    window.open(
        link.href,
        '_blank'
    );

    link.innerHTML = "google";
    link.setAttribute('href', "https://google.com.")
}

function changeColor(){
    document.getElementsByClassName("nav-item").style.backgroundColor = "red";
}

function newSidebar() {
    document.getElementById("col-md-12").className = "col-md-8";
    var col4div = document.createElement("div");
    var sidebarhead = document.createElement("h2");
    col4div.appendChild(sidebarhead);
    var sidebar = document.getElementById("container")
    sidebar.appendChild(col4div)
}

function main() {
    changeTitle();
    newArticle();
    replaceLink();
    changeColor();
    newSidebar();
}

main();