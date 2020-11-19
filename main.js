$(document).ready(function(){
    $('.toggle-bars').click(function(){
        $('.nav-items').css({"transform": "translateX(0%)"});
        $('.toggle-times').css({"transform": "rotate(180deg)"});
    })
        
    $('.toggle-times').click(function(){
        $('.nav-items').css({"transform": "translateX(-110%)"});
        $('.toggle-times').css({"transform": "rotate(0deg)"});
    });
});


    
