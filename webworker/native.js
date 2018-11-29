function sort(a) {
    a.sort( function(a, b){
   return a - b;
    });
}


self.addEventListener('message', function(e) {
    var vetor = e.data;
    sort(vetor);
 	self.postMessage(vetor);
}, false);