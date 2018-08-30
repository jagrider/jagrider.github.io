// /*
// * Stuff that needs done when the page loads.
// */
// $(function() {
//   registerNavButtons();
// });
//
// /*
// * registerNavButtons lets us register the buttons for about and contact
// */
// function registerNavButtons() {
//   var sections = ["about", "contact", "experience", "projects", "skills"];
//
//   sections.forEach(function(section) {
//     clickAndScroll("#nav-" + section, "#" + section);
//   });
// }
//
// /*
// * Smoothens scrolling when About or Contact are selected from the navbar
// */
// function clickAndScroll(link, section) {
//   var delay = 700;
//
//   $(link).click(function() {
//     $("html, body").animate({
//       scrollTop: $(section).offset().top
//     }, delay);
//
//     return false;
//   });
// }
//

function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	element_class += '-container';
	scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 600);
	}
}

jQuery(document).ready(function () {

    /*
      Used for Navigation
    */
    $('a.scroll-link').on('click', function(e) {
      e.preventDefault();
      scroll_to($(this), $('nav').outerHeight());
    });

    $('a.scroll-link').on('click', function(e) {
      e.preventDefault();
      $('html, body').stop().animate({scrollTop: 0}, 600);
    });
 });
