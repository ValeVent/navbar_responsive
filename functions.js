//aggiungendo e rimuovendo classi
/* document.getElementById("menu-icon").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        this.classList.remove("toggle");
    } else {
        menu.classList.add("show");
        this.classList.add("toggle");
    }
}); */

//usando il metodo toggle
document.getElementById("menu-icon").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
    this.classList.toggle("toggle");
});

