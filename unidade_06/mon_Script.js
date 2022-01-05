$('button#botao').click(function() {
    $('div#listagem').css('display','block');
    carregarDados();
}); 

function carregarDados() {
    $.getJSON('gerarJson.php', function(data) {
        var elemento;

        elemento = "<ul>";
        $.each(data, function(i, valor) {
            elemento += "<li class='nome'>" + valor.nomeproduto + "</li>"; 
            elemento += "<li class='preco'>" + valor.precounitario + "</li>";
            //elemento += "<li class='imagem'>" + valor.imagempequena + "</li>";  
            elemento += `<li class ="imagem"><img src="${valor.imagempequena}"></li>`;           
        });
        elemento += "</ul>";
            
        $('div#listagem').html(elemento);
    });
}
