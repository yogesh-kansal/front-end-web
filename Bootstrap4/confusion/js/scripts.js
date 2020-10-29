   $(document).ready(function() {
       $("#carousel").carousel({interval: 2000});

       console.log("hhhh"); 
       $("#carouselButton").click(function(){
           if ($("#carouselButton").children("span").hasClass('fa-pause')) {
               $("#mycarousel").carousel('pause');
               $("#carouselButton").children("span").removeClass('fa-pause');
               $("#carouselButton").children("span").addClass('fa-play');
           }
           else if ($("#carouselButton").children("span").hasClass('fa-play')){
               $("#mycarousel").carousel('cycle');
               $("#carouselButton").children("span").removeClass('fa-play');
               $("#carouselButton").children("span").addClass('fa-pause');                    
           }
       });            
       console.log("jjj");

       console.log("jjj");
       $('#c-pause').click(function() {
           console.log("jjj");
           $('#carousel').carousel('pause');
       });
       console.log("jjj");

       $('#c-play').click(function() {
           $('#carousel').carousel('cycle');
       });

       
       $('#click').click(function() {            
           $('#pop').modal('toggle');
       });
       $('#loginButton').click(function() {            
           $('#loginmodal').modal('toggle');
       });
   });
