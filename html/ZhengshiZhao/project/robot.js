$(".flash").click(function() {
        $(".eyes").toggleClass('laser');
});
function changecolor() {
	var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
	return randomRGBA;
}

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
/*$(".antena").click( function(){
	for i

});*/
