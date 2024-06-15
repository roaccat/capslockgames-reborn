$(document).ready(function () {
    var elementsToToggle = [$('.navbar'), $('.nav-link'), $('.dropdown button'), $('.dropdown:hover .btn'), $('.custom-btn:focus'), $('.custom-btn:active'), $(".btn-back-to-top")];

    var storedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (storedScrollPosition) {
        var scrollTop = parseInt(storedScrollPosition);
        if (scrollTop > 0) {
            elementsToToggle.forEach(function (element) {
                element.addClass('navbar-scroll');
            });
        }
    }

    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if (window.innerWidth >= 992) {
            if (scrollTop >= 20) {
                elementsToToggle.forEach(function(element) {
                    element.addClass('navbar-scroll');
                });
                sessionStorage.setItem('scrollPosition', scrollTop);

                if (scrollTop > elementsToToggle[0].height()) {
                    elementsToToggle[6].css('display', 'block');
                } else {
                    elementsToToggle[6].css('display', 'none');
                }
            } else {
                elementsToToggle.forEach(function(element) {
                    element.removeClass('navbar-scroll');
                });
                sessionStorage.removeItem('scrollPosition');
            }
        } else {
            elementsToToggle.forEach(function(element) {
                element.removeClass('navbar-scroll');
            });
            sessionStorage.removeItem('scrollPosition');
        }
    });

    elementsToToggle[6].on('click', backToTop);
});

$(window).on('load',function() {
	$(".preloader").delay(500).fadeOut("slow");
});

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0; 
}

var swiper = new Swiper(".slide-content", { 
	slidesPerView: 2,
	spaceBetween: 25,
	loop: false,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints:{
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});