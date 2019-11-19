$(document).ready(function() {
    "use strict";

$('.navbar-brand').css('color','white');

});

$('#test-button').on('click', function(){
    if(!$('.navbar-collapse').hasClass('show')){
        $('.navbar-toggler').collapse('hide');
    }
});
