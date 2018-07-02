// Toggle
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  body.classList.toggle('dark');
});

// Page Title
$(function () {
  // Get page title
  var pageTitle = $("title").text();
  // Change page title on blur
  $(window).blur(function () {
    $("title").text("Collecting tabs I see... Welcome to the dark side :: Ryan Parag - Product Designer");
  });
  // Change page title back on focus
  $(window).focus(function () {
    $("title").text(pageTitle);
  });
});