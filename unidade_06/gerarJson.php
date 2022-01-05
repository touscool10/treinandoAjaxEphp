<?php
    //Configurações gerais
    //Preparando o arquivo para consulta em outros domínios
    header('Access-Control-Allow-Origin:*');

    //abrir conexão
    $conecta = mysqli_connect("localhost","root","root","andes");
    if (mysqli_connect_errno()) {
        die("Conexão Falhou!!" . mysqli_connect_errno());
    }
   //consultar banco de dados
    $selecao = "SELECT nomeproduto, precounitario, imagempequena FROM produtos";
    $produtos = mysqli_query($conecta, $selecao);
    if (!$produtos) {
        die("Falha na consulta ao Banco!");
    }

    $retorno = array();
    //Listagem de dados
    while ($linha = mysqli_fetch_object($produtos)) {
        $retorno[] = $linha;
    }
    $arquivoJsonGerado = json_encode($retorno);
    echo $arquivoJsonGerado;

    //Liberar espaço da consulta (query) e fechar a conexão conecta
    mysqli_free_result($produtos);
    mysqli_close($conecta);
?>
