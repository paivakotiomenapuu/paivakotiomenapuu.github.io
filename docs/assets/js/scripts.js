/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            document.getElementById("logo").src = "assets/img/logo-white.png";
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            document.getElementById("logo").src = "assets/img/logo-color.png";
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    let form = document.getElementById("application")
    if (form) {
        form.addEventListener("submit", composeMail);
    }

    function composeMail(event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let birthday = document.getElementById("birthday").value;
        let startDate = document.getElementById("startDate").value;
        let amount = document.getElementById("amount").value;
        let freeText = document.getElementById("freeText").value;

        let lineBreak = "%0D%0A";
        var msgBody = "Sähköposti: " + email + lineBreak;
        msgBody += "Puhelin: " + phone + lineBreak;
        msgBody += "Syntymäpäivä: " + birthday + lineBreak;
        msgBody += "Toivottu aloitus pvm: " + startDate + lineBreak;
        msgBody += "Päivittäinen hoitoaika: " + amount

        if (freeText != "") {
            msgBody += lineBreak + "Lisäinfo: " + freeText;
        }
        
        window.location = 'mailto:pkomenapuu@paivakotiomenapuu.fi?subject=Päiväkotihakemus&body=' + msgBody;
    }
});
