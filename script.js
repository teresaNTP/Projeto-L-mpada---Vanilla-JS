const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

//criar função para ver se a lampada esta quebrada ou não
//index.off procura na string a palavra
function isLampBroken() {
  return lamp.src.indexOf("quebrada");
}



//criando a função lampOn
function lampOn() {
  lamp.src = "./img/ligada.jpg";
}

function lampOff() {
  lamp.src = "./img/desligada.jpg";
}
//fazer função lampBroken
function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
}


//capturar o click
turnOn.addEventListener("click", lampOn);
//quando alguem clickar executar a função lampOn
turnOff.addEventListener("click", lampOff);
//para quando o mouse passar pela lampada
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);


