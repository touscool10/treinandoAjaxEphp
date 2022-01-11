var cep = "88040-100";
$.ajax({
    type: "GET",
    url: "https://viacep.com.br/ws/"+cep+"/json/",
    async:false
}).done(function(data) {
   // let datas = $.parseJSON(data);
    console.log(data);
}).fail(function() {
    console.log('Erro na consulta ao CEP.');
});