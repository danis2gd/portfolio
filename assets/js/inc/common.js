$(document).ready(function() {
    $('#contactModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    window.onscroll = function () {
        //navbar scroll effect
        const navbar = document.querySelector('.navbar');
        const splash = document.querySelector('.bg');
        const container = document.querySelector('.initial-container');

        if ((window.pageYOffset) >= splash.clientHeight) {
            navbar.classList.add('sticky');
            container.classList.add('padded');
        } else {
            navbar.classList.remove('sticky');
            container.classList.remove('padded');
        }

        //social links activation
        if (document.body.scrollTop > (splash.clientHeight / 2) || document.documentElement.scrollTop > (splash.clientHeight / 2)) {
            //document.getElementsByClassName("bg")[0].style.height = "25%";
            document.getElementsByClassName('social-bar')[0].style.display = 'inherit';

        } else {
            // document.getElementsByClassName("bg")[0].style.height = "100%";
            document.getElementsByClassName('social-bar')[0].style.display = 'none';
        }
    };

    const typed6 = new Typed('#subname', {
        strings: ['Developer'],
        typeSpeed: 101,
        backSpeed: 0,
        loop: false
    });
});