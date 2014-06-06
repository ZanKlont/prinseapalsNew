$(document).ready(function() {
	
	$('#fullpage').fullpage({
		anchors: ['home', 'services', 'about-us', 'contact-us'],
		css3: true,
		afterLoad: function(anchorLink, index) {

            // First time scrollin fade in
            if(index != 1){
                $('#section' + (index - 1)).find('h1, h4, p, ul, table').css('opacity', '1');
            }

        },
        onLeave: function(from, destination, direction){ //alert(from+'   '+destination+'  '+direction);
        	if(destination == 4 && direction == 'down') {
        		//$('#section3 h1').addClass('effect');
        	}
        }			
	});
});