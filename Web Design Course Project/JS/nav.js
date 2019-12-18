


$(document).ready(
    function(){
        $('a.mobile_menu').on('click', function(){
            let currentNavHeight = $('nav').height();
            // console.log(currentNavHeight);
            if ( currentNavHeight < 80 ){
                $('nav > ul').style
                let newNavHeight = 615;
                // console.log(newNavHeight);
                $('nav').animate( { 'height': newNavHeight + 'px'}, 750);
                $('nav *').css("display","block");
            }else{
                $('nav').animate( { 'height':'0px' }, 750, function(){
                    $('nav *').removeAttr('style');
                });
                $('nav *').css("display" , "none");
                // $('nav *').css({"display":"none" , "transition": "display"});
            }
        });
   
        $(window).resize( function(){
            if( $(this).width() > 980 ){
                $('nav').removeAttr('style');
            }

        });
    }
);