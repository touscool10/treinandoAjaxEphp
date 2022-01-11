function retornarCategorias(data) {
    $.each(data,function(i,value) {
        $('#categorias').append('<option  value="'+value.categoriaID+'">'+value.nomecategoria+ '</option>');
    });
}


/*
function retornarProdutos(data) {
    $.each(data,function(i,value) {
        $('#produtos').append('<option  value="'+value.produtoID+'">'+value.nomeproduto+ '</option>');
    });
}*/

$("#categorias").change(function(e) {
    let categoriaID = $(this).val();
    $.ajax({
        type: 'GET',
        data:"categoriaID=" + categoriaID,
        url: "http://localhost:8000/php_ajax/unidade_11/retornar_produtos.php",
        async: false
    }).done(function(data) {
        let datas = $.parseJSON(data);
        let produtos = '';
        $.each(datas,function(i,value) {
            produtos += '<option  value="'+value.produtoID+'">'+value.nomeproduto+ '</option>';
        });
        $('#produtos').html(produtos);
    }).fail(function() {
        console.log('Erro na listagem dos produtos');
    });

  });
