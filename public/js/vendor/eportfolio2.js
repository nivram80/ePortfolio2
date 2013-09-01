$(document).ready(function() {
	$('.iframe').fancybox({
		width : '80%',
		height : '80%',
		type : 'iframe',
		scrolling : 'no'
	}); // end fancybox
	$('a[href^="http://"]').attr('target','_blank');
	alert('This js file is being accessed properly!');
}); // end ready