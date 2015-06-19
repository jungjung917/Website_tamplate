var subrobot = $(".sub-robot");
var footleft = $(".foot-left");
var footright = $(".foot-right");
function flash() {
	$(".eyes").toggleClass('laser');
	}
function changecolor() {
	var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
	return randomRGBA;
}
function lefthandup() {
         $(".left").css("transform",'rotate(0deg)');
	 $(".left").css("-webkit-transform",'rotate(0deg)');
	 $(".left").css("-moz-transform",'rotate(0deg)');
	 $(".left").css("top",'60px');
}

function righthandup() {
	$(".right").css("transform",'scaleY(-1) rotate(180deg)' );
        $(".right").css("-webkit-transform",'scaleY(-1) rotate(180deg)');
	$(".right").css("-moz-transform",'scaleY(-1) rotate(180deg)');
	$(".right").css("top",'-60px');
}

function lefthandoff() {
       $(".left").css("transform",'scaleY(-1)');
                $(".left").css("-webkit-transform",'scaleY(-1)');
		         $(".left").css("-moz-transform",'scaleY(-1)');
			          $(".left").css("top",'100px');
}
function righthandoff() {
	$(".right").css("transform",'rotate(180deg)' );
	$(".right").css("-webkit-transform",'rotate(180deg)');
	$(".right").css("-moz-transform",'rotate(180deg)');
	$(".right").css("top",'-21px');

}
$(".flash").click(function() {
	flash();
	});

$(".Bcolor").click(function() {
        var bcolor = changecolor();
        $(".robot").css("background",bcolor);
	$(".robot").css("z-index",-1);
});
$(".Rcolor").click(function() {
        var rcolor = changecolor();
	var rbrain = '120px solidi '+ rcolor;
	$(".torso").css("border-color",rcolor);
	$(".brain").css("background",rcolor);
});
$(".hand").click(function() {
	righthandup();
	lefthandup();
});
$(".moves").click(function() {
	for (i=0; i<3; i++) {
	subrobot.animate({left: '400px'},"slow");
	subrobot.animate({left: '-100px'},"slow");
	footleft.animate({top:'-20px'},"slow");
        footright.animate({top:'-61px'},"slow");
	footleft.animate({top:'10px'},"slow");
	footright.animate({top:'-91px'},"slow");
	}

});
$(".dance").click(function() {
     for (i = 0 ; i < 10; i++) {
     	subrobot.animate({left: '400px'},"slow");	
     	subrobot.animate({left: '-100px'},"slow");
     	footleft.animate({top:'-20px'},"slow",function() {lefthandup();flash();});
     	footright.animate({top:'-61px'},"slow",function() {righthandoff();});
     	footleft.animate({top:'10px'},"slow",function() {righthandup();});
      	footright.animate({top:'-91px'},"slow",function() {lefthandoff();});
     }
});

