$(document).ready(function() {
    "use strict";

// $('.navbar-brand').css('color','white');

    function ScrollTo () {
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });
    }












}); //  <------- HA HA HA HEY SOPHIE THIS IS WHERE THE JAVASCRIPT THING ENDS