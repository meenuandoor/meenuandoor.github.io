$(document).ready(function(){
      $('.col-4-lg').hover(
          //trigger when mouse hovers
        function(){
            $(this).animate({
                marginTop: "-=1%",
            },200);   
        },
          
          //trigger when hovers out
        function(){
            $(this).animate({
                marginTop: "0%",
            },200);   
        }
           
      );
        
    });