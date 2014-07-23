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
		// $('#cooltheme')[0].load();
		$('#cooltheme')[0].play();
	}
}
function introScreen(){
	introSound();
	reset();
	//fade in then out jQuery image
	//fade in title and startsub image
	$('.jQuery').fadeIn(100, function(){
		$(this).fadeOut(3000,function(){
			$('.title').fadeIn("slow", function(){
					$('.startsub').fadeIn("slow");
			});
			});
		});
	$('.block').hide();
	$(document).keydown(function(s){
	if(s.which==32){
		//go to instruction screen first
		gameDemo();
	}
	});
}
function reset(){
	$('.title').hide();
	$('.startsub').hide();
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
			{'left':'550px'},
			500,
			function(){
				//things to do after the animation is finished-show the div holding hadouken
				//note the div holder for hadouken is actually the collider and div block for destructible sign is obstacle
				$('.hadouken-hold').show();
				var collider='.hadouken-hold';
				var obstacle='.block';
				var hits=$(collider).collision(obstacle);
				hits.css({'background':'url(images/breaksign.gif) no-repeat'});
				$(this).hide();
				$(this).css('left','0px');
		});
	})
	.mouseup(function(){
		// console.log('mouseup');
		$('hadouken-hold').hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		//ryu goes back to ready position
	});
	
	$(document).keydown(function(e){
	if (e.which==88){
		//88 is ASCII for x
		//method that loads animated gif of cool
		cool();
		$('.block').show();
		$('.instructions').hide();
		$('.quote').show();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
		$('.main').css({'background':'url(images/starry2.png) no-repeat left bottom'});
		$('.block').css({'background':'url(images/sign.png) no-repeat'});
		$('.endsub').show();
		titleoff();
		}
	else if (e.which==83){
		//ryu div moves right
		//83 is ASCII for s

		$('.ryu').css({'left':'+=5px'});
	}
	else if (e.which==65){
		//ryu div moves left
		//65 is ASCII for a
		$('.ryu').css({'left':'-=5px'});
	}
	});
	$(document).keyup(function(e){
	if (e.which==88){
		// $('#cooltheme')[0].pause();
		$('#cooltheme')[0].load();
		$('.ryu-still').show();
		$('.ryu-cool').hide();
		$('.endsub').show();
	}
	if (e.which==13){
		//13 is asc code for enter which loops back to introScreen
		introScreen();
	}
	});
}