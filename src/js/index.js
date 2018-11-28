// Toggle

var toggle = document.querySelector('.toggle');
var body = document.querySelector('body');
body.classList = sessionStorage.getItem('bg');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  body.classList.toggle('dark');
  
  if (sessionStorage.getItem('bg') === 'dark') {
    sessionStorage.setItem('bg', '');
  } else {
    sessionStorage.setItem('bg', 'dark');
  }
  body.classList = sessionStorage.getItem('bg');
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
  
  if($(body).hasClass('dark')) {
    $(toggle).addClass('active');
  }
});

window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)

console.log('%c It seems like Ryan\'s code is working. If you\'d like to learn more about my experience, get in touch at parag.ryan@gmail.com ', 'background: #05ffda; color: #191e27; font-size: 18px;');

$('.nav [data-section]').click(function() {
  $('.nav [data-section]').removeClass('active');
  $(this).addClass('active');
  const target = $(this).data('section');
  $('.design-section').removeClass('active');
  if(target == 'designOverview') {
    $('#designOverview').addClass('active');
  } else if(target == 'designColors') {
    $('#designColors').addClass('active');
  } else if(target == 'designTypography') {
    $('#designTypography').addClass('active');
  } else if(target == 'designIcons') {
    $('#designIcons').addClass('active');
  } else if(target == 'designLayout') {
    $('#designLayout').addClass('active');
  } else if(target == 'designComponents') {
    $('#designComponents').addClass('active');
  }
});

$('.swatch__grid [data-section]').click(function() {
  $('.nav  [data-section]').removeClass('active');
  $(this).addClass('active');
  const target = $(this).data('section');
  $('[data-section="' + target + '"]').addClass('active');
  $('.design-section').removeClass('active');
  if(target == 'designOverview') {
    $('#designOverview').addClass('active');
  } else if(target == 'designColors') {
    $('#designColors').addClass('active');
  } else if(target == 'designTypography') {
    $('#designTypography').addClass('active');
  } else if(target == 'designIcons') {
    $('#designIcons').addClass('active');
  } else if(target == 'designLayout') {
    $('#designLayout').addClass('active');
  } else if(target == 'designComponents') {
    $('#designComponents').addClass('active');
  }
});
