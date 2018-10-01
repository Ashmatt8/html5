  window.onload = function () {

    var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var pokemons = [
      "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle",
      "Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto",
      "Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew",
      "Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable",
      "Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras",
      "Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey",
      "Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam",
      "Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude",
      "Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo",
      "Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee",
      "Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan",
      "Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking",
      "Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto",
      "Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos",
      "Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"
    ]

    var palavra ;  
    var letrasCorretas = [];           
    var vidas ;  
    var numVidas = document.getElementById("vidas");
  
    var buttons = function () {
      botoes = document.getElementById('buttons');
      letras = document.createElement('ul');
  
      for (var i = 0; i < alfabeto.length; i++) {
        letras.id = 'alfabeto';
        list = document.createElement('li');
        list.id = 'letras' + i;
        check();
        list.innerHTML = alfabeto[i];
        botoes.appendChild(letras);
        letras.appendChild(list);
      }
    }  

    var words = function () {
      espacos = document.getElementById('espacos');
      pal = document.createElement('ul');

      for (var i = 0; i < palavra.length; i++) {
        pal.id = 'palavra';
        lista = document.createElement('li');
        lista.id = 'space' + i;
        espacos.appendChild(pal);
        pal.appendChild(lista);
      }
    } 

   showLives = function () {
    numVidas.innerHTML = "Você possui " + vidas + " vidas";
    if (vidas < 1) {
      numVidas.innerHTML = "Game Over - A resposta era: " + palavra;
      disableButtons();
    }

    if(isWinner() === true) {
      numVidas.innerHTML = "Você Venceu! Parabéns!";
      disableButtons();
    }
  }

  isWinner = function () {
    for(var i=0; i < palavra.length; i++) {
      var palabra = palavra[i];
      if(letrasCorretas.indexOf(palabra) === -1) {
          return false;
      }
    }

    return letrasCorretas.length > 0;
  }

  disableButtons = function () {
    for(var i=0; i < 26; i++) {
      var id = "letras" + i;
      document.getElementById(id).style.backgroundColor = "gray";
      var letra = document.getElementById(id);
      letra.onclick = null;
    }
  }



   check = function () {
    list.onclick = function () {
      var resp = (this.innerHTML);
      resp = resp.toUpperCase();
      var id = this.id;
      document.getElementById(id).style.backgroundColor = "gray";
      this.onclick = null;

      var j = (palavra.indexOf(resp));

      if (j === -1) {
        vidas -= 1;
      } else {
        for(var i = 0; i < palavra.length; i++) {
          if(palavra[i] === resp) {
            var id = "space" + i;
            var space = document.getElementById(id);
            space.innerHTML = resp;  
            letrasCorretas[letrasCorretas.length] = resp;
          }
        }
      }

      showLives();
    }
  }
      
    // Play
    play = function () {
      var word = pokemons[Math.floor(Math.random() * pokemons.length)];
      palavra = word.toUpperCase();
      console.log(word);
      buttons();
      words();

      vidas = 10;
      showLives();

      
    }
  
    reset = function () {
      letras.parentNode.removeChild(letras);
      pal.parentNode.removeChild(pal);
      letrasCorretas = [];
      play();
    }

    play();
}

var soundPlay = 0;
var audio1 = new Audio();
sounds = function () {
  if(soundPlay === 1 ){
    audio1.pause();
    soundPlay = 2;
  } else if(soundPlay !== 0 ) {
    audio1.play();
    soundPlay = 1;
  }

  if(soundPlay === 0 ){
      audio1.src = "../assets/sounds/pokemon.mp3";
      audio1.play();
      soundPlay = 1;
  }
}
