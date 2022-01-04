function carregarDados() {
    var ajax;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.open('GET', 'dados.txt', true);
    ajax.onreadystatechange = () => {
        if (ajax.status == 200) {
            if (ajax.readyState == 3) {
                console.log('Carregando');
            }
            if (ajax.readyState == 4) {
                //console.log(ajax.responseText);
                var elemento = document.getElementById('dinamico');
                elemento.innerHTML = ajax.responseText;
                
                var titulo = document.getElementsByTagName('h1')[0];
                titulo.innerHTML = ajax.responseText;
            }
        } else {
            console.log('Erro na operação');
        }
    }
    ajax.send();
    console.log(ajax)
} // fechar função carregarDados()



