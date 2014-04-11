$('.graphbar a').on('click', function(e) {
	e.preventDefault();
	var href = $(this).attr('href').split('#').pop();
	var bar = $('.bar1');

	console.log( href );

	bar.attr('id', href);
});