$(document).ready(function() {
    "use strict";


    $('.dropdown-item').on('click',function (){
        $('.navbar-collapse').collapse('hide');
    });

    $('#myBtn').on('click',function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    //Get the button:
    let mybutton;
    mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }















});