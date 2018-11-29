var initialTimeBubbleSort = 0;
var initialTimeNative = 0;
var finalTimeBubbleSort = 0;
var diffBubleSort = 0;
var finalTimeNative = 0;
var diffTimeNative = 0;
var workerBubbleSort = new Worker('bubbleSort.js');
var workerNative = new Worker('native.js');

function gerarBubbleSort() {
    initialTimeBubbleSort = new Date().getTime();
    var tamanho = document.getElementById("inputNumber").value;
    var vetor = [];
    for (var i = 0; i < tamanho; i++) {

        vetor[i] = randomNumber();
    }

    workerBubbleSort.postMessage(vetor);
};

function gerarNativo() {
    initialTimeNative = new Date().getTime();
    var tamanho = document.getElementById("inputNumber").value;
    var vetor = [];
    for (var i = 0; i < tamanho; i++) {

        vetor[i] = randomNumber();
    }

    workerNative.postMessage(vetor);
};


function randomNumber() {
    return parseInt((Math.random() * 100), 10)
}


workerBubbleSort.addEventListener('message', function(e) {
    finalTimeBubbleSort = new Date().getTime();
    finalTimeBubbleSort = parseFloat(finalTimeBubbleSort - initialTimeBubbleSort);
    document.getElementById("timeBubbleSort").innerHTML = finalTimeBubbleSort + " ms";
}, false);


workerNative.addEventListener('message', function(e) {
    diffTimeNative = new Date().getTime();
    finalTimeNative = parseFloat(diffTimeNative - initialTimeNative);
    document.getElementById("timeNative").innerHTML = finalTimeNative + " ms";
}, false);

workerBubbleSort.addEventListener('error', function(e){
    debugger
  });
workerNative.addEventListener('error', function(e){
     debugger
});

function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength)
    }
  }
