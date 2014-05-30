$(document).ready(function() {
	var slidePos = 1;
console.log(slidePos);
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
	$('#right').click(function(event) {

		if(slidePos == 4) {
			return false;
		}

		$('#right').prop('disabled', 'disabled');
		$.each($('#slider-ul li'), function(index, val) {
			var thisMargin = $(this).css('margin-left');

			setTimeout(function() {
				
				
				$('#slider-ul li').eq(index).css('margin-left', (parseInt(thisMargin) - parseInt(imgWidth)) + 'px');

					if(index > 5 && slidePos != 4) {
						setTimeout(function() {
							$('#right').removeProp('disabled');
							slidePos++;
							console.log(slidePos);
						}, 500);
							
					}

			}, index*150);
			
		});

	});

	/*
	Slide right
	 */
	$('#left').click(function(event) {

		if(slidePos == 1) {
			return false;
		}

		$('#left').prop('disabled', 'disabled');
		$.each($('#slider-ul li'), function(index, val) {
			var thisMargin = $(this).css('margin-left');

			setTimeout(function() {
				//console.log(index);
				
				$('#slider-ul li').eq(index).css('margin-left', (parseInt(thisMargin) + parseInt(imgWidth)) + 'px');
									
					
					if(index > 5) {
						setTimeout(function() {						
							$('#left').removeProp('disabled');
							slidePos--;
							console.log(slidePos);
						}, 500);
							
					}

			}, index*150);
			
		});
	});

	/*
	Slide descriptions up and down
	 */
	$('#slider-ul li').mouseenter(function(event) {
		$(this).find('div.description').css('top', '0.3em');
		$(this).find('div.description h4').css('margin-left', '0em');
	}).mouseleave(function(event) {
		$(this).find('div.description').css('top', '105%');
		$(this).find('div.description h4').css('margin-left', '-9em');
	});

});