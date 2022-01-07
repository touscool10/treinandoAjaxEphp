$('#formulario_transportadora').submit(function(e) {
    e.preventDefault();
    var formulario = $(this);
    var retorno = alterarFormulario(formulario)
});

function alterarFormulario(dados) {
    $.ajax({
        type: "POST",
        data: dados.serialize(),
        url:  "alterar_transportadora.php",
        async: false
    }).then(sucesso, falha);

    function sucesso(data) {
        let sucesso = $.parseJSON(data)["sucesso"];
        let mensagem = $.parseJSON(data)["mensagem"];
        $("#mensagem").show();
        if (sucesso) {
            $("#mensagem p").html(mensagem);
        } else {
            $("#mensagem p").html(mensagem);
        }
    }
    function falha() {
        $("#mensagem").show();
        $("#mensagem p").html("Erro no sistema. Tente mais tarde");
    }   
}