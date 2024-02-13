

//Preloader==============>
document.addEventListener('DOMContentLoaded', function() {
    var preloader = document.querySelector('.preloader');
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 0);
});



//Header-Show-Hide==============>
var lastScrollTop = 0;
var header = document.querySelector('.header');
window.addEventListener("scroll", function() {
    var st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});



//Menu-Overlay==============>
document.addEventListener("DOMContentLoaded", function() {
    var menuBurger = document.querySelector(".menu-burger");
    var menuOverlay = document.querySelector(".menu-overlay");
    var isClose = document.querySelectorAll(".isClose");

    menuBurger.addEventListener("click", function() {
        menuOverlay.classList.add("active");
    });

    isClose.forEach(function(element) {
        element.addEventListener("click", function() {
            menuOverlay.classList.remove("active");
        });
    });
});


//Scroll-Destinations==============>
document.addEventListener("DOMContentLoaded", function() {
	var btn = document.getElementById("button");
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        scrollToTop(1000);
    });

	function scrollToTop(duration) {
        var start = window.scrollY || document.documentElement.scrollTop,
            currentTime = 0,
            increment = 20;
        var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, -start, duration);
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


// Cursors using GSAP==============>
gsap.set(".cursorA", { xPercent: -60, yPercent: -60 });
gsap.set(".cursorB", { xPercent: -60, yPercent: -60 });

var A = document.querySelector(".cursorA");
var B = document.querySelector(".cursorB");

window.addEventListener("mousemove", function(e) {
    gsap.to(A, 0.1, { x: e.clientX, y: e.clientY });
    gsap.to(A, { delay: 0.1, opacity: 1 });
    gsap.to(B, 0.1, { x: e.clientX, y: e.clientY });
    gsap.to(B, { delay: 0.1, opacity: 1 });
});

document.querySelectorAll(".cursor-link").forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        gsap.to(".cursorA", { duration: 0.35, width: 54, height: 54, background: "none" });
        gsap.to(".cursorB", { duration: 0.35, width: 54, height: 54, background: "none" });
    });
    element.addEventListener("mouseleave", function() {
        gsap.to(".cursorA", { duration: 0.35, width: 15, height: 15, background: "white" });
        gsap.to(".cursorB", { duration: 0.35, width: 15, height: 15, background: "white" });
    });
});



// Scroll Animations==============>
var animatedBoxes = document.querySelectorAll('.animatable');
var lastScrollTop = 0;

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.remove('animated');
        }
    });
}, { threshold: 0.5 });

animatedBoxes.forEach(function(box) {
    observer.observe(box);
});

window.addEventListener('scroll', function() {
    var st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        animatedBoxes.forEach(function(box) {
            var rect = box.getBoundingClientRect();
            if (rect.bottom <= window.innerHeight) {
                box.classList.add('animated');
            }
        });
    } else {
        if (st === 200) {
            animatedBoxes.forEach(function(box) {
                box.classList.remove('animated');
            });
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;
});


