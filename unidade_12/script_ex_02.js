$('#cep').blur(function(e) {
    var cep =$('#cep').val();
    var meu_url = "https://viacep.com.br/ws/"+cep+"/json/";
    var validarCEP = /^[0-9]{5}-?[0-9]{3}$/;
    if (validarCEP) {
        $('#mensagem').hide();
        var retorno = pesquisarCEP(meu_url);
    } else {
        $('#mensagem').show();
        $('#mensagem').find('p').html('CEP Inválido');
         //limpar campos
        $('#endereco').val("");
        $('#cidade').val("");
        $('#estado').val("");
        $('#bairro').val("");
    }
    
});

function pesquisarCEP(address) {
    $.ajax({
        type: "GET",
        url: address,
        async:false
    }).done(function(data) {
        $('#endereco').val(data.logradouro);
        $('#cidade').val(data.localidade);
        $('#estado').val(data.uf);
        $('#bairro').val(data.bairro);
    }).fail(function() {
        //console.log('Erro na consulta ao CEP.');
        $('#mensagem').show();
        $('#mensagem').find('p').html('CEP Inválido');
        //limpar campos
        $('#endereco').val("");
        $('#cidade').val("");
        $('#estado').val("");
        $('#bairro').val("");

    });
}



