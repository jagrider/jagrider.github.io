/*
 * Stuff that needs done when the page loads.
 */
$(function () {
  registerNavButtons();
});

/*
 * registerNavButtons lets us register the buttons for about and contact
 */
function registerNavButtons() {
  var sections = [
    'about',
    'experience',
    'projects',
    'skills',
    'certifications',
    'contact',
  ];

  sections.forEach(function (section) {
    clickAndScroll('#nav-' + section, '#' + section);
  });
}

/*
 * Smoothens scrolling when About or Contact are selected from the navbar
 */
function clickAndScroll(link, section) {
  var delay = 700;

  $(link).click(function () {
    $('html, body').animate(
      {
        scrollTop: $(section).offset().top - 50,
      },
      delay
    );

    return false;
  });
}
