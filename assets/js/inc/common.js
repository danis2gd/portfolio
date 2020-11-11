$(document).ready(function() {
    $('#contactModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    window.onscroll = function () {
        //navbar scroll effect
        var navbar = $('.navbar');
        var splash = $('.bg');
        var brand = $('.navbar-brand');
        var sticky = navbar.offsetTop;

        if ((window.pageYOffset + 30) >= splash[0].clientHeight) {
            navbar[0].classList.add("sticky");
        } else {
            navbar[0].classList.remove("sticky");
        }

        //social links activation
        if (document.body.scrollTop > (splash[0].clientHeight / 2) || document.documentElement.scrollTop > (splash[0].clientHeight / 2)) {
            //document.getElementsByClassName("bg")[0].style.height = "25%";
            document.getElementsByClassName("social-bar")[0].style.display = "block";

        } else {
            // document.getElementsByClassName("bg")[0].style.height = "100%";
            document.getElementsByClassName("social-bar")[0].style.display = "none";
        }
    };

    const typed6 = new Typed('#subname', {
        strings: ['Developer'],
        typeSpeed: 101,
        backSpeed: 0,
        loop: false
    });
});