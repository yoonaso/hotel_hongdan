
$(document).ready(function () {
    //fullpage jquery st
  $("#fullpage").fullpage({
	  
      navigation: true, 
      navigationpPosition: 'left', 
      scrollingSpeed:700,
	  
	  
	  onLeave: function(origin, destination, direction){
		var leavingSection = this;
        var nthChild = origin.index + 2;
        var nthChild2 = origin.index;
          
        
		if(origin.index == 2 && direction =='down'){
			$("#fp-nav ul li a span").css({"background":"#fe6666"});	
           $("#fp-nav ul li:nth-child(4) a span").css({"background":"#ffffff"});
		   
          
		}
          
        else if(origin.index == 3 && direction =='down'){
			$("#fp-nav ul li a span").css({"background":"#fe6666"});	
           $("#fp-nav ul li:nth-child(5) a span").css({"background":"#ffffff"});
		   
		}
          
              else if(origin.index == 4 && direction =='up'){
			$("#fp-nav ul li a span").css({"background":"#fe6666"});
           $("#fp-nav ul li:nth-child(4) a span").css({"background":"#ffffff"});
       
          } 
          
           else if(origin.index == 5 && direction =='up'){
			$("#fp-nav ul li a span").css({"background":"#fe6666"});	
           $("#fp-nav ul li:nth-child(5) a span").css({"background":"#ffffff"});
		   
		}
           
          
      
          else if(direction =='down' ){
             
          $("#fp-nav ul li a span").css({"background":"#33346d"});	
           $("#fp-nav ul li:nth-child(" + nthChild + ") a span").css({"background":"#fe6666"});
              
          }
          else if(direction =='up' ){
             
          $("#fp-nav ul li a span").css({"background":"#33346d"});	
           $("#fp-nav ul li:nth-child(" + nthChild2 + ") a span").css({"background":"#fe6666"});
              
          }		 
	}
	
  });
	

 
	

	$(".slide-test").slick({
	slideToshow:1,
		slideToscroll:1,
		arrows:false,
		dots:true,
		 autoplay: true,
		autoplaySpeed: 4000,
	});
	
    
    setTimeout(function(){
        
        $(".fade-out").addClass("active");
        
        $(".fixed-box").addClass("active");	
    },2000)
//	$(".fade-out").fadeOut(5000, 'linear');
//	$(".fixed-box").fadeOut(2000, 'linear');	
//top-bar menu visible, hidden active st

    
    
    $(".top-bar-wrap > .right-menu").click(function(){
       
        $(".top-bar-nav").addClass("active");
        $(".darkblue-wrap").addClass("active");
        
    });
    
    $(".darkblue-wrap > .close-box").click(function(){
         $(".top-bar-nav").removeClass("active");
        $(".darkblue-wrap").removeClass("active");
        
    });
    
     $(".dark-wrap").click(function(){
         
          $(".top-bar-nav").removeClass("active");
        $(".darkblue-wrap").removeClass("active");
        
     });
    
    
 

var controller = new ScrollMagic.Controller();
	
var tween_1 = TweenMax.to('.top-bar-wrap > .right-menu > img:nth-of-type(2)', 1 , {
   
    visibility:"visible",
	
});


var scene_1 = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , //0~1 ,
    offset: 100,
	duration: "100%",
})

.setTween(tween_1) 
.addTo(controller) 

var tween_top = TweenMax.to('.top-bar-wrap > .right-menu > img:nth-of-type(1)', 1 , {
   
    visibility:"hidden",
	
});


var scene_top = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , //0~1 ,
    offset: 100,
	duration: "100%",
})

.setTween(tween_top)
.addTo(controller) 


var tween_top_2 = TweenMax.to('.top-bar-wrap > .left-text > a:nth-of-type(1) > img', 1 , {
   
    visibility:"hidden",
	
});


var scene_top_two = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , //0~1 ,
    offset: 100,
	duration: "100%",
})

.setTween(tween_top_2) 
.addTo(controller) 


var tween_top_2_white = TweenMax.to('.top-bar-wrap > .left-text > a:nth-of-type(2) > img', 1 , {
   
    visibility:"visible",
});


var scene_top_two_white = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , //0~1 ,
    offset: 100,
	duration: "100%",
})

.setTween(tween_top_2_white)
.addTo(controller) 

	
var tween2 = TweenMax.to('.top-bar-wrap > .left-text > h1', 1 , {
   color:"#fff",
	
});

var scene2 = new ScrollMagic.Scene({
	triggerElement: ".section4",
    triggerHook:  0.7 , //0~1 ,
    offset: 100,
	duration: "100%",
})

.setTween(tween2) 
.addTo(controller) 


var tween3 = TweenMax.to('#fp-nav ul li span' , 1, {
	visibility:"hidden",
});	
	
var scene3 = new ScrollMagic.Scene({
	triggerElement: ".section6",
    triggerHook:  0.7 , //0~1 ,
    offset: 100,
	duration: "100%",
})

.setTween(tween3) 
.addTo(controller)


});


