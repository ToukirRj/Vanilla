

//Scroll-Destinations==============>
document.addEventListener("DOMContentLoaded", function() {
    var scrollDownButton = document.getElementById("scroll-down");
    var heroElement = document.getElementById("hero");

    scrollDownButton.addEventListener("click", function() {
        var heroOffsetTop = heroElement.offsetTop;
        var scrollDestination = heroOffsetTop - 150;
        scrollTo(scrollDestination, 500);
    });

    function scrollTo(to, duration) {
        var start = window.scrollY || document.documentElement.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
        var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
});