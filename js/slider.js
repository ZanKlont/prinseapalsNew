$(function() {

	var margin = 0;

	$('#slider-ul li').each(function(index, el) {

		$(this).css({
			'left': margin + '%',
			'padding': '0.2em'
		});		

		margin = margin + 25;
	});

});