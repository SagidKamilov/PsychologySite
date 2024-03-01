document.getElementById("menu-mob-btn").addEventListener("click", function() {
    element = document.getElementById("mobile-menu");
    var instanceMobilMenu = window.getComputedStyle(element).display;
    if (instanceMobilMenu == "none"){ 
        document.getElementById("mobile-menu").style.display = "grid";
    } else {
        document.getElementById("mobile-menu").style.display = "none";
    }
});


const links = document.querySelectorAll("#mobile-link")
for(elem of links){
    elem.addEventListener("click", function() {
        element = document.getElementById("mobile-menu");
        var instanceMobilMenu = window.getComputedStyle(element).display;
        if (instanceMobilMenu == "grid"){ 
            document.getElementById("mobile-menu").style.display = "none";
        }
    });
}
