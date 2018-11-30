function Enviar() {
    alert('Mensagem salva!');

    var nome = document.getElementById("Nome").value;
    localStorage.setItem("Nome", nome);

    var anotacao = document.getElementById("Anotação").value;
    localStorage.setItem("Anotação", anotacao);

    var data = new Date();
    var ano = data.getFullYear();
    var mes = data.getMonth() + 1;
    var dia = data.getDate();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    var dataUltimoAcesso = dia + "/" + mes + "/" + ano + ' - ' + hora + ':' + minuto;
    localStorage.setItem("Data", dataUltimoAcesso)  
}
    

window.onload = function init() {
    var nomeSalvo = localStorage.Nome;

    if (nomeSalvo != undefined)
        document.getElementById("Nome").value = nomeSalvo;
    else
        alert("Bem vindo");

    var dataSalva = localStorage.Data;
    if (dataSalva != undefined){
        document.getElementById("ultimoacesso").innerHTML = dataSalva;
    }
        
    var anotacaoSalva = localStorage.Anotação;
    if (anotacaoSalva != undefined) {
        document.getElementById("Anotação").innerHTML = anotacaoSalva;
    }
}
