function bubbleSort(v) {
    var troca;
    do {
        troca = false;
        for (var i=0; i < v.length-1; i++) {
            if (v[i] > v[i+1]) {
                var temp = v[i];
                v[i] = v[i+1];
                v[i+1] = temp;
                troca = true;
            }
        }
    } while (troca);
}


self.addEventListener('message', function(e) {
    var vetor = e.data;
    bubbleSort(vetor);
 	self.postMessage(vetor);
}, false);