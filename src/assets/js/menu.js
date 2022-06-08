function myFunction() {
    check = document.getElementById("nav-container").style.display;

    if (check == "flex"){
    document.getElementById("nav-container").style.display = "none";
    }else{
        document.getElementById("nav-container").style.display = "flex";
    }
}
