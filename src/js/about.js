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
    }
    ];
  var roleRandom = roles[Math.floor(Math.random() * roles.length)];
  document.getElementById("textRotate").innerHTML = roleRandom.text;
})();