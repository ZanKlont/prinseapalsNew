$(document).ready(function() {
	
	$('#fullpage').fullpage({
		anchors: ['home', 'services', 'about-us', 'contact-us'],
		css3: true,
		afterLoad: function(anchorLink, index) {

            // Contact Us animation
            if(anchorLink == 'contact-us'){
            	
            }

        },
        onLeave: function(from, destination, direction){ //alert(from+'   '+destination+'  '+direction);
        	if(destination == 4 && direction == 'down') {
        		$('#section3 h1').addClass('effect');
        	} else if(destination != 4 && direction == 'up') {
        		setTimeout(function() {
        			$('#section3 h1').removeClass('effect');
        		}, 1000);
        	}
        }			
	});
});