const form = document.getElementById('form');
let linhas = [''];
let nomes = ['']
let numeros = ['']

form.addEventListener('submit',function(e){
    e.preventDefault();

    /*selecionando oc campos*/
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');
    const categoria = document.getElementById('categoria');
    const tbody = document.getElementById('tbody');
    const tfootSucesso = document.getElementById('sucesso')
    const tfootError = document.getElementById('error')

    /*setando a linha q ira ser escrita na tela e a salvando em uma lista para q elas nao se substituam e sim acrecentem como um for */
    let linha = `<tr><td>${nome.value}</td> <td>${numero.value}</td> <td>${categoria.value}</td></tr>`
    linhas.push(linha)
    tbody.innerHTML = linhas

    /*validando se os nomes e numeros ja existem ou nao*/
    if (nomes.includes(nome.value) && (numeros.includes(numero.value))) {
        tfootSucesso.style.display = 'none'
        tfootError.innerHTML = `<tr><td>Este numero e nome ja estão cadastrados </td></tr>`
        tfootError.style.display = 'block'
        linhas.pop()
        
    }
    else{
        tfootError.style.display = 'none'
        tfootSucesso.innerHTML = `<tr><td>cadastrado com sucesso </td></tr>`
        tfootSucesso.style.display = 'block'
    }

    /*salvando os nomes e numeros nas listas para poder fazer a validaçao*/
    nomes.push(nome.value)
    numeros.push(numero.value)
})