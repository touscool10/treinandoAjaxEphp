<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PHP com AJAX</title>
        <link href="_css/estilo.css" rel="stylesheet">
    </head>

    <body>
        <main>
            <div id="janela_formulario">
                <form id="pesquisarProdutos">
                    <label for="categorias">Categorias</label>
                    <select id="categorias">
                    </select>
                    
                    <label for="produtos">Produtos</label>
                    <select id="produtos">
                    </select>
                </form>
            </div>
        </main>
        
        
        <script type="text/javascript" src="_js/jquery.js"></script>
        <script type="text/javascript" src="_mon__Script.js"></script>
        <script type="text/javascript" src="http://localhost:8000/php_ajax/unidade_11/retornar_categorias.php?callback=retornarCategorias"></script>
     <!--   <script type="text/javascript" src="http://localhost:8000/php_ajax/unidade_11/retornar_produtos.php?callback=retornarProdutos"></script> -->
        
    </body>
</html>