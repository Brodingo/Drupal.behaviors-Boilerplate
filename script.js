(function (window, document, $, Drupal, undefined) {

Drupal.behaviors.namedFunction = function (context) {

	$('.named-function:not(.named-function-processed)', context).addClass('named-function-processed').each(function(){

	});
	
};

}(window, document, jQuery, Drupal));
