var possibilidades = ['pedra', 'papel', 'tesoura']
var personagens = ['goku', 'vegeta', 'jiren']
var resultado;
var person;
var result = document.getElementById("result");
var resultIa = document.getElementById("resultIa");
var vitorias = 0;
var derrotas =0;
var soundPlay;
var audio1 = new Audio();

iniciar = function() {
	document.getElementById("table").style.visibility = "visible"; 
	document.getElementById("table-game").style.visibility = "visible"; 
	document.getElementById("reiniciar").style.visibility = "visible";
	document.getElementById("sounds").style.visibility = "visible";
	result.innerHTML=vitorias;
	resultIa.innerHTML=derrotas;
	var imgPerson = document.getElementById("imgPerson");
	exibirPersonagem(person, imgPerson);
	var escolhaPersonagem = personagens[Math.floor(Math.random() * personagens.length)]
	var imgIa = document.getElementById("imgIA");
	exibirPersonagem(escolhaPersonagem, imgIa);
	audio1.src = "../assets/sounds/dragonball.mp3";
	audio1.loop = true;
	audio1.play();
	soundPlay = 1;
}

exibirPersonagem = function(id, img){
	if(id === 'goku') {
		img.src = '../assets/images/goku.png';
	}

	if(id === 'vegeta') {
		img.src = '../assets/images/vegeta.png'
	}

	if(id === 'jiren') {
		img.src = '../assets/images/jiren.png'
	}
}

exibirGif= function(personagem) {
	person = personagem;
	var tableInicial = document.getElementById("table-inicial"); 
	tableInicial.parentNode.removeChild(tableInicial);
	var choose = document.getElementById("choose"); 
	choose.parentNode.removeChild(choose);
	document.getElementById("gif").style.visibility = "visible"; 

	myVar = setTimeout(esconderGif, 3000);
}

esconderGif= function() {
	var gif = document.getElementById("gif"); 
	gif.parentNode.removeChild(gif);
	iniciar();
}

jogar = function(escolha) {
	var escolhaComputador = possibilidades[Math.floor(Math.random() * possibilidades.length)];
	var escolhaIa = document.getElementById("escolhaIa");
	escolhaIa.innerHTML = 'O IA escolheu ' + escolhaComputador;


	if(escolha === 'papel') {
		if(escolhaComputador === 'pedra') {
			resultado = 'ganhou';
		}

		if(escolhaComputador === 'papel') {
			resultado = 'empatou';
		}

		if(escolhaComputador === 'tesoura') {
			resultado = 'perdeu';
		}
	}


	if(escolha === 'pedra') {
		if(escolhaComputador === 'pedra') {
			resultado = 'empatou';
		}

		if(escolhaComputador === 'papel') {
			resultado = 'perdeu';
		}

		if(escolhaComputador === 'tesoura') {
			resultado = 'ganhou';
		}
	}


	if(escolha === 'tesoura') {
		if(escolhaComputador === 'pedra') {
			resultado = 'perdeu';
		}

		if(escolhaComputador === 'papel') {
			resultado = 'ganhou';
		}

		if(escolhaComputador === 'tesoura') {
			resultado = 'empatou';
		}
	}

	showResult();
}


showResult= function() {
	if(resultado === 'ganhou') {
		vitorias++;
		result.innerHTML = vitorias;
		escolhaIa.innerHTML = escolhaIa.innerHTML + ' - VOCÊ GANHOU'
	}

	if(resultado === 'perdeu') {
		derrotas++;
		resultIa.innerHTML = derrotas;
		escolhaIa.innerHTML = escolhaIa.innerHTML + ' - VOCÊ PERDEU'
	}

	if(resultado === 'empatou') {
		escolhaIa.innerHTML = escolhaIa.innerHTML + ' - VOCÊ EMPATOU'
	}

}

reset= function() {
	window.location.reload();
}

sounds = function () {
	if(soundPlay === 1 ){
	  audio1.pause();
	  soundPlay = 2;
	} else {
	  audio1.play();
	  soundPlay = 1;
	}
  }