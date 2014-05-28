$(document).ready(function() {

	/*
	Get the width of img and set the magin for each li.
	Get the width of 
	 */
	var imgWidth = $('#slider-ul li a').eq(0).width();
	var marginLeft = 0;

	$('.description').css('width', imgWidth + 'px');

	$.each($('#slider-ul li'), function(index, val) {
		 $(this).css('margin-left', marginLeft + 'px');


		 marginLeft = marginLeft + imgWidth;
	});

	/*
	Slide left
	 */
	$('#left').click(function(event) {

		$('.slideBtn').prop('disabled', 'disabled');
		$.each($('#slider-ul li'), function(index, val) {
			var thisMargin = $(this).css('margin-left');

			setTimeout(function() {
				
				
				$('#slider-ul li').eq(index).css('margin-left', (parseInt(thisMargin) - parseInt(imgWidth)) + 'px');

					if(index > 5) {
						setTimeout(function() {
							$('.slideBtn').removeProp('disabled');
						}, 800);
							
					}

			}, index*150);
			
		});

	});




	/*
	Slide right
	 */
	$('#right').click(function(event) {

		$('.slideBtn').prop('disabled', 'disabled');
		$.each($('#slider-ul li'), function(index, val) {
			var thisMargin = $(this).css('margin-left');

			setTimeout(function() {
				//console.log(index);
				
				$('#slider-ul li').eq(index).css('margin-left', (parseInt(thisMargin) + parseInt(imgWidth)) + 'px');

					if(index > 5) {
						setTimeout(function() {
							$('.slideBtn').removeProp('disabled');
						}, 800);
							
					}

			}, index*150);
			
		});
	});

});