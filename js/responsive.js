function responsiveFunction() {
    var x = document.getElementById("topNav");

    if (x.className === "nav") {
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}