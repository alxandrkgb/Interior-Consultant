let menu = document.getElementById("menu")
let nav = document.getElementsByTagName("ul")[0]
let span = document.getElementsByTagName("span")[0]
let tg = true;
menu.onclick = function () {
    if (tg) {
        nav.style.display = "block"
        span.innerText = "close"
        tg = false;
    } else {
        nav.style.display = "none"
        span.innerText = "menu"
        nav.style.display = null
        tg = true;
    }
}