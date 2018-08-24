var password = document.getElementById('password');
var submit = document.getElementById('submitForm');

function clicked() {
  $('#errorHero').empty();
  $('#passwordError').empty();
  var pageKey = '123456';

  if (password.value == pageKey) {
    location.href = pageDest;
  } else if (password.value.length == 0) {
    $('#passwordError').text('It seems that no password was entered. Try again.');
    $('#password').addClass('form--error');
  } else {
    $('#errorHero').prepend('<img style="width:100%;" src="../images/pass-fail.gif" />')
    $('#passwordError').append('<p class="error-text">Oops, you might have forgot the password. For access, <a class="link" href="mailto:parag.ryan@gmail.com">contact me</a>.</p>')
    $('#password').addClass('form--error');
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