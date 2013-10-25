(function($) {
	$.fn.accordionPlugi = function(options) {
		var settings = $.extend({}, options);
		var TabLinkMain=settings.TabLinkMain;
		var TabContentmain=settings.TabContentmain;
		
		$(TabContentmain + '> ').hide();
		$(TabContentmain + '> :first-child').show();
		$(TabLinkMain+ '> li:first-child').addClass('active');
		
		$(TabLinkMain+ '> li').click(function(){
			 var liInndex=$(this).index()+1;
			 $(TabContentmain + '> ').slideUp();
			 $(TabLinkMain+ '> li').removeClass('active');
			 $(this).addClass('active');
			 $(TabContentmain + '> :nth-child('+liInndex+')').slideDown();
		})
	}
}(jQuery));


// -- Added comment