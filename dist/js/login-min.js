var password=document.getElementById("password"),submit=document.getElementById("submitForm");function clicked(){$("#errorHero").empty(),$("#passwordError").empty();"123456"==password.value?location.href=pageDest:0==password.value.length?($("#passwordError").text("It seems that no password was entered. Try again."),$("#password").addClass("form--error")):($("#errorHero").prepend('<img style="width:100%;" src="../images/pass-fail.gif" />'),$("#passwordError").append('<p class="error-text">Oops, you might have forgot the password. For access, <a class="link" href="mailto:parag.ryan@gmail.com">contact me</a>.</p>'),$("#password").addClass("form--error"))}password.addEventListener("keydown",function(r){13===r.keyCode&&clicked()}),submit.addEventListener("click",function(){clicked()});