$( document ).ready(function() {
	console.log("sanity check");

	let mainNav = $(".main-nav");
	    mainNavScroll = "main-nav-scrolled";
	    header = $('header').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > header ) {
	    mainNav.addClass(mainNavScroll);
	  } else {
	    mainNav.removeClass(mainNavScroll);
	  }
	});
});
