var el = document.getElementById('scrolling-up');

window.addEventListener('scroll',(event) => {
    console.log('Scrolling...');
    var scrollTimeout = null;
var scrollendDelay = 500; // ms

$(window).scroll(function() {
    if ( scrollTimeout === null ) {
        scrollbeginHandler();
    } else {
        clearTimeout( scrollTimeout );
    }
    scrollTimeout = setTimeout( scrollendHandler, scrollendDelay );
});

function scrollbeginHandler() {
    // this code executes on "scrollbegin"
    el.style.opacity = 1;
}

function scrollendHandler() {
    // this code executes on "scrollend"
    el.style.opacity = 0;
    scrollTimeout = null;
}
})
