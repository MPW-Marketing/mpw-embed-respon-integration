jQuery(document).ready(function($){

    $('iframe[src*="youtube.com"]').each(function() {
    	if ( $(this).parent().hasClass('embed-container') || $(this).hasClass('wp-theater-iframe') || $(this).hasClass('') === false ) {
    		return;
    	} else {
    		$(this).wrap('<div class="embed-container"></div>');
    	}
    }); 
        $('iframe[src*="vimeo.com"]').each(function() {
    	if ( $(this).parent().hasClass('embed-container') || $(this).hasClass('wp-theater-iframe') || $(this).hasClass('') === false ) {
    		return;
    	} else {
    		$(this).wrap('<div class="embed-container"></div>');
    	}
    }); 

});
