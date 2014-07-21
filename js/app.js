$(document).ready(function(){
	intro();
	gameDemo();
});
function playHadouken () {
	$('#ryu-theme')[0].stop();
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
function intro(){
	$('#ryu-theme')[0].volume=0.5;
	$('#ryu-theme')[0].load();
	$('#ryu-theme')[0].play();
}
function gameDemo(){
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
	}