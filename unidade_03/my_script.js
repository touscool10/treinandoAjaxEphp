//$('div.curso:first').load('dados.txt');
/*
$.ajax({
    url: 'nome.php'
}).then(sucesso, falha);

function sucesso(result) {
    $('#nome').html(result);
}

function falha() {
    $('#nome').html('Falha no carregamento');
}*/

$.ajax({
    url:'nome.php'
}).done(function(valor){
    $('#nome').html(valor);
}).fail(function(){
    $('#nome').html('Erro no carregamento');
}).always(function() {
    $('#mensagem').html('Menagem de qualquer coisa');
});