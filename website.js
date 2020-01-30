$(document).ready(function() {
    "use strict";


    $('.dropdown-item').on('click',function (){
        $('.navbar-collapse').collapse('hide');
    });

    //Get the button:
    let mybutton;
    mybutton = document.getElementById("myBtn");

    $('#myBtn').bind("mouseover", function(){
        var color  = $(this).css("background-color");

        $(this).css("background", "#555");

        $(this).bind("mouseout", function(){
            $(this).css("background", color);
        })
    });

    $('#myBtn').on('click',function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });



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