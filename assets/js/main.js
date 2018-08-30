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

jQuery(document).ready(function () {

    /*
      Used for Navigation
    */
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 80
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });
