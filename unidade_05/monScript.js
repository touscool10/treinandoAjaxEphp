$('#botao').click(function(){
    $('#listagem').css('display','block');
    listarProdutos();
});

function listarProdutos() {
    $.getJSON('_json/produtos.json',function(data){
        // console.log(data);
        var elemento = '<ul>';
        $.each(data, function(i, valor){
            elemento += `<li class="nome">${valor.nomeproduto}</li>`;
            elemento += `<li class="preco">R$ ${valor.precounitario}</li>`;
        });
        elemento += '</ul>';
        $('#listagem').html(elemento);
     });
}



