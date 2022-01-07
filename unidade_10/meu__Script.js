$('#janela_transportadoras ul li a.excluir').click(function (e) {
    e.preventDefault(); // não vai fazer ação de navegação // não vai mudar a url // o link não vai funcionar
   
    let id = $(this).attr('title');
    //let id = $(this).closest('ul').find('input').attr('value');
    var elemento = $(this).closest('ul');
    
    $.ajax({
        type:"POST",
        data:"transportadoraID=" + id,
        url: "exclusao.php",
        async:false
    }).done(function(data) {
        let sucesso = $.parseJSON(data)["sucesso"];
        let mensagem = $.parseJSON(data)["mensagem"];
        if (sucesso) {
            elemento.fadeOut();
        } else {
            console.log('Erro na exclusão.');
        }
    }).fail(function() {
        console.log('Erro no sistema.');
    });  
});
