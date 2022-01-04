    $('#botao').click(function (){
        listarProdutos();
    });

    function listarProdutos() {
        //$('#botao').after('<div id="listagem"></div>');
        $('#listagem').css("display","block");
        $.ajax({
            url:'_xml/produtos.xml'
        }).done(function(arquivo){
            //$('#listagem').html(valor);
            var elemento = '<ul>';
            $(arquivo).find('produto').each(function() {
                var nome = $(this).find('nomeproduto').text() ;
                var precoUnitario = $(this).find('precounitario').text();
                //$(nome).addClass('nome');
                //$(precoUnitario).addClass('precoUnitario');
                elemento += `<li class="nome">${nome}</li>`;
                elemento += `<li class="precoUnitario">R$ ${precoUnitario}</li>`;  
            })
            elemento += '<ul>';
            $('#listagem').html(elemento);
            
    
        }).fail(function() {
            $('#listagem').html('Erro no carregamento');
        });
    }


