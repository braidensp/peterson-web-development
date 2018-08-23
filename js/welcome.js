function tod() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning, I'm Braiden Peterson and I make your dream website become reality";
    } else if (time < 20) {
        greeting = "Good day, I'm Braiden Peterson and I make your dream website become reality";
    } else {
        greeting = "Good evening, I'm Braiden Peterson and I make your dream website become reality";
    }
document.getElementById("tod").innerHTML = greeting;
}