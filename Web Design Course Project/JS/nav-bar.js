$(document).ready(
    function(){
       

        $('.menu-icon').click(function(){
            if( $('nav').hasClass('active')){
                $('nav').removeClass('active');
            }
            else $('nav').addClass('active');
        });

 });
