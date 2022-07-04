// DESKTOP

// // MOBILE

var sidebarBtn = $('#sidebar-toggle');
var content = $('.content');
var sidebarMobile = $('.sidebar');
var btn = $('.btn');

function touchControl(event, obj) {
	if (event == true) {
		obj.style.touchAction = 'auto';
	}
}

sidebarBtn.on('click', function () {
	if (sidebarMobile.hasClass('sidebar--open')) {
		// closing
		sidebarMobile.removeClass('sidebar--open');
		sidebarMobile.addClass('sidebar--close');

		sidebarBtn.css('background-color', '#3c7d1b');

		btn.toggleClass('active');
		btn.toggleClass('not-active');

		content.removeClass('touch-disable');
		content.addClass('touch-enable');
	} else {
		// opening
		sidebarMobile.removeClass('sidebar--close');
		sidebarMobile.addClass('sidebar--open');

		sidebarBtn.css('background-color', '#917434');

		btn.toggleClass('active');
		btn.toggleClass('not-active');

		content.removeClass('touch-enable');
		content.addClass('touch-disable');
	}
});

// if ($(window).width() < 768) {
// }
