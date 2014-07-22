$(document).ready(function(){
	introScreen();
});
var hadoukensound=false;
function playHadouken () {
	hadoukensound=!hadoukensound;
	if (hadoukensound){
	$('#ryu-theme')[0].pause();
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
	}
}
function introSound(){
	var ryusound=false;
	ryusound=!ryusound;
	if (ryusound){
		$('#ryu-theme')[0].volume=0.5;
		$('#ryu-theme')[0].load();
		$('#ryu-theme')[0].play();
}
}
var coolsound=false;
function cool(){
	coolsound=!coolsound;
	if (coolsound){
		$('#ryu-theme')[0].pause();
		$('#cooltheme')[0].volume=0.5;
		//$('#cooltheme')[0].load();
		$('#cooltheme')[0].play();
	}
}
function introScreen(){
	introSound();
	$('.title').show();
	$('.startsub').show();
	reset();
	$(document).keydown(function(s){
	if(s.which==32){
		//go to instruction screen first
		gameDemo();
	}
	});
}
function reset(){
	$('.main').css({'background':'white'});
	$('#cooltheme')[0].pause();
	$('.instructions').hide();
	// showTitle and insert coin screen
	$('.quote').hide();
	$('.endsub').hide();
}
function titleoff(){
	$('.title').hide();
	$('.startsub').hide();
}
function instruction(){
	//show instructions & hide Title &insert coin screen
}
function gameDemo(){
	reset();
	titleoff();
	$('.instructions').show();
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		// console.log('mousedown');
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left':'300px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','-155px');
		});
	})
	.mouseup(function(){
		// console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		//ryu goes back to ready position
	});
	$(document).keydown(function(e){
	if (e.which==88){
		//method that loads animated gif of cool
		cool();
		$('.instructions').hide();
		$('.quote').show();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
		$('.main').css({'background':'url(images/starry2.png) no-repeat left bottom'});
		$('.endsub').show();
		titleoff();
		}
	});
	$(document).keyup(function(e){
	if (e.which==88){
		// $('#cooltheme')[0].pause();
		$('#cooltheme')[0].load()
		$('.ryu-still').show();
		$('.ryu-cool').hide();
		$('.endsub').show();
	}
	if (e.which==13){
		introScreen();
	}
	});
}