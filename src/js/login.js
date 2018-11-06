var password = document.getElementById('password');
var viewPasswordButton = document.getElementById('viewPass');
var submit = document.getElementById('submitForm');

function clicked() {
  $('#errorHero').empty();
  $('#passwordError').empty();
  var send = 'guyfieri';
  if (password.value == send) {
    var cardContent = document.querySelector('.login__card');
    var delay = 2000;
    $(cardContent).empty();
    $(cardContent).css('text-align','center');
    $(cardContent).append('<div class="hero-icon"><div class="hero-icon__success"><div class="hero-icon__success--tip"></div><div class="hero-icon__success--long"></div><div class="hero-icon__success--placeholder"></div><div class="hero-icon__success--fix"></div></div></div><div class="spacer spacer--25"></div><h4 class="u-text-green">Password successful!</h4><p>You\'re being redirected to the project.</p><div class="spacer spacer--25"></div><div class="progress"></div>');
    setTimeout(function () {
      location.href = pageDest;
    }, delay);
  } else if (password.value.length == 0) {
    $('#passwordError').append('<p class="error-text">It seems that no password was entered. Try again.</p>');
    $('#password').addClass('form--error');
  } else {
    $('#errorHero').prepend('<img style="width:100%;" src="../images/pass-fail.gif" />')
    $('#passwordError').append('<p class="error-text">Oops, you might have forgotten the password. For access, <a class="link" href="mailto:parag.ryan@gmail.com">contact me</a>.</p>')
    $('#password').addClass('form--error');
  }
}

function viewPass() {
  if($(password).is('input:password')) {
    $(password).prop('type', 'text');
    $('.view-password span').text('Hide Password');
  }
  else {
    $(password).prop('type', 'password');
    $('.view-password span').text('View Password');
  }
}

password.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    clicked();
  }
});
submit.addEventListener("click", function () {
  clicked();
});
viewPasswordButton.addEventListener("click", function () {
  viewPass();
});