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

// added the line from editor

// -- Added comment

//added one more line after folder change

// added one more line from folder 
