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
    }
    ];
  var roleRandom = roles[Math.floor(Math.random() * roles.length)];
  document.getElementById("textRotate").innerHTML = roleRandom.text;
})();