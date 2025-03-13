(function () {
  var roles = [
    {
      text: "gummy-eating champ"
    },
    {
      text: "your friendly neighborhood Spider-Man"
    },
    {
      text: "90's hip hop aficionado"
    },
    {
      text: "former zookeeper"
    },
    {
      text: "sparkling water enthusiast"
    },
    {
      text: "collector of browser tabs"
    },
    {
      text: "knower of random facts"
    },
    {
      text: "still hasn't completed <a class=\"link\" target=\"_blank\" href=\"https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild\">The Legend of Zelda: Breath of the Wild</a>"
    },
    {
      text: "currently a Tampa, FL native"
    },
    {
      text: "a morning person"
    },
    {
      text: "likes to draw letters"
    },
    {
      text: "a Floridian with too many denim shirts"
    },
    {
      text: "fumbling through learning new things"
    }
    ];
  var roleRandom = roles[Math.floor(Math.random() * roles.length)];
  document.getElementById("textRotate").innerHTML = roleRandom.text;
})();

var lightTheme = ['#F5F5F5','#E7E7E9','#00D1B2','#FFFFFF','#E7E7E9','#191E27','#00D1B2','#E684AE'];
var darkTheme = ['#191E27','#2C3849','#444951','#FFFFFF','#2F353E','#E7E7E9','#00D1B2','#E684AE'];

function themeable(theme) {
	var demoStuff = document.querySelector('#demoStuff');
	var themeBorder = theme[4];
	demoStuff.innerHTML = '<div style="background: ' + theme[0] + '; border-color: ' + themeBorder + ';" class="demo__container"><div style="background: ' + theme[1] + '; border-color: ' + themeBorder + ';" class="demo__item"></div><div style="background: ' + theme[2] + '; border-color: ' + themeBorder + ';" class="demo__item"></div><div style="background: ' + theme[3] + '; border-color: ' + themeBorder + ';" class="demo__item"></div><div style="background: ' + theme[4] + '; border-color: ' + themeBorder + ';" class="demo__item"></div><div style="background: ' + theme[5] + '; border-color: ' + themeBorder + ';" class="demo__item"></div><div style="background: ' + theme[6] + '; border-color: ' + themeBorder + ';" class="demo__item"></div><div style="background: ' + theme[7] + '; border-color: ' + themeBorder + ';" class="demo__item"></div></div>';
}

function slackTheme(x) {
  var slackInput = document.querySelector('#slackThemeInput');
  if(x == 'light') {
    slackInput.value = lightTheme;
    var y = 'light theme';
				themeable(lightTheme);
  } else if(x == 'dark') {
    slackInput.value = darkTheme;
    var y = 'dark theme';
				themeable(darkTheme);
  }
  slackInput.select();
  document.execCommand("copy");
  var copyValidate = document.querySelector('#copyValidate');
  copyValidate.innerHTML = 'You copied the ' + y + '!';
}
