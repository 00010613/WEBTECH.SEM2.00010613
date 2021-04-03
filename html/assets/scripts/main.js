$(document).ready(function () {

    // JQUERY MASK FOR PHONE

    jQuery(document).ready(function () {
        $(".phonenumber").mask("+998 (11) 111 11 11");
    });

    // MOBILE MENU OPEN

    $(".mobile-button").click(function () {
        $(".navigation").toggleClass("active");
    });

    // MODAL OPEN

    $(".leaveapp-modal-btn").click(function () {
        $(".leaveapp-modal").addClass("active");
    });
    $(".modal-close").click(function () {
        $(this).parent().removeClass("active");
    });

    // LANGUAGE DROPDOWN

    $(".lang-drop").click(function () {
        $(".lang").toggleClass("opened");
    });

    // CAROUSELS

    $(".first-carousel, .second-carousel").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        // autoplay: true,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: true,
        responsive: {

            0: {

                items: 1

            },

            768: {

                items: 2

            },

        }
    });
});

// IMAGE AUTO ALT

$(document).ready(function () {
    $("img").each(function () {
        var $img = $(this);
        var filename = $img.attr("src");
        if (typeof attr == typeof undefined || attr == false) {
            $img.attr(
                "alt",
                filename.substring(
                    filename.lastIndexOf("/") + 1,
                    filename.lastIndexOf(".")
                )
            );
        }
    });
});