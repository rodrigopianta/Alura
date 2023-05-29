//codigo do carro

let yCarros =[40, 96, 150, 215, 265, 322];
let velocidadeCarros = [2, 2.5, 3.2, 3, 2.7, 2.2];
let xCarros =[600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 30;
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}
function passouTodaATela(xCarros){
  return xCarros < -50;
}