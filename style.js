function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener('scroll', reveal);

window.onload = function () {
    var images = ["./images/k.jpeg", "./images/o.jpeg", "./images/u.jpeg"];

    function changeImage() {
        var i = Math.floor(Math.random() * 3);
        document.getElementById("hero").style.backgroundImage = "url('" + images[i] + "')";
    }
    setInterval(changeImage, 5000)

}