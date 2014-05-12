$(document).ready(function() {
	$('.iframe').fancybox({
		width : '90%',
		height : '90%',
		type : 'iframe',
		scrolling : 'no'
	}); // end fancybox
	$('a[href^="http://"]').attr('target','_blank');
	$('a[href^="https://"]').attr('target','_blank');  
	$('a[href^="mailto:"]').attr('target','_blank');
}); // end ready