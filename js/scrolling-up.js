window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollUp = document.getElementById("scrolling-up");
    //console.log(scrollUp);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
}