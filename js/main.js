/*master page*/


/* Nav bar */

$(function ()  {
    'use strict';
    $(window).scroll(function(){
    var navbar =$('.navbar');
    $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled'); 
    
    });
       
       
       /* tabs*/
       
            
    $('.mmmm li').click(function(){
   $(this).addClass('selected').siblings().removeClass('selected');
   $('.box1 .tabs-content > div').hide();
   $('.'+ $(this).data('class')).show();
   window.console.log($(this).data('class'));
   });
    
       $('.box3 li').click(function(){
   $(this).addClass('selectedd').siblings().removeClass('selectedd');
   $(' .mmmm .tabs-content > div').hide();
   $('.'+ $(this).data('class')).show();
   $('.mmmm .sub-tabs > div').hide();
   $('.'+ $(this).data('class')).show();
   window.console.log($(this).data('class'));
   });


});

/*
 ggg
 */


$(document).ready(function () {
    $('.box0.hidden').fadeIn(1000).removeClass('hidden');
});

$(document).ready(function () {
    $('.sup-box5.hidden').fadeIn(5000).removeClass('hidden');
});


$(document).ready(function () {
    $('.box7.hidden').fadeIn(500).removeClass('hidden');
});

$(document).ready(function () {
    $('.sub-box0.hidden').fadeIn(500).removeClass('hidden');
});

$(document).ready(function(){
   $('.alm').click(function(){
       $(".t15").hide();
      $(".t14").toggle();
      $(".t16").hide();
   });
   
   
     $('.adb').click(function(){
       $(".t14").hide();
      $(".t15").toggle();
      $(".t16").hide();
      });
     
     
        $('.star1').click(function(){
       $(".alm").hide();
      $(".adb").hide();
   
   });
        
                $('.ssm').click(function(){
       $(".t1").show();
 
         $(".nnox").addClass("selected");
         $(".nno2").removeClass("selected");
   });
                
       $('.ssm2').click(function(){
       $(".t7").show();
 
         $(".nnoxx").addClass("selected");
         $(".nno2").removeClass("selected");
   });
                               
       $('.ssm3').click(function(){
       $(".t10").show();
 
         $(".nnoxxx").addClass("selected");
         $(".nno2").removeClass("selected");
     
   });
       
          $(".ddee").click(function(){
            $(".t16").show();
           });
      
        
   });




/* TEST */


function check(){
    
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var question5 = document.quiz.question5.value;
        var question6 = document.quiz.question6.value;
        var question7 = document.quiz.question7.value;
        var question8 = document.quiz.question8.value;
        var question9 = document.quiz.question9.value;
        var question10 = document.quiz.question10.value;
        
        var correct = 0;
    
    
        if (question1 == "الألتيميتر") {
            correct++;
    }
        if (question2 == "الثرموسفير") {
            correct++;
    }	
        if (question3 == "1200") {
            correct++;
        }

        if (question4 == "1") {
            correct++;
        }
        if (question5 == "1") {
            correct++;
        }
        if (question6 == "2") {
            correct++;
        }
        if (question7 == "1") {
            correct++;
        }   if (question8 == "2") {
            correct++;
        }   if (question9 == "2") {
            correct++;
        }   if (question10 == "3") {
            correct++;
        }
       
        var messages = [" ممتاز، استمر يا بطل", "ليس سيئاً ،لكن ينبغي ان تحاول مرة آخرى", "اطلع على الدرس مرة اخرى"];
        var score;
    
        if (correct < 0 || correct <5) {
            score = 2;
        }
    
        if (correct > 5 && correct < 7) {
            score = 1;
        }
    
        if (correct >= 9) {
            score = 0;
        }
    

   
        document.getElementById("message").innerHTML = messages[score];
        document.getElementById("number_correct").innerHTML = "لقد حصل على  " + correct + " من 10 درجات.";
        document.getElementById("jjj2").style.display="none";
        document.getElementById("j1").style.display="inline-block";
        
        
     /*   document.getElementById("button").disabled =true;*/

        };
        

             
           



   
   

