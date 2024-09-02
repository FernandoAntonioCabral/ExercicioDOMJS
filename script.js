let titulo = document.createElement("h1");

titulo.innerText = "Título";
titulo.id = "titulo";

let div = document.querySelector(".titulo1");
div.appendChild(titulo);

let produto = document.createElement("h2");
let nome = document.createElement("p");
let descricao = document.createElement("p");
let preco = document.createElement("p");

produto.innerText = "Carro";
nome.innerText = "Gol bolinha";
descricao.innerText = "Vendo carro velho";
preco.innerText = "R$ 3000.00";

let post = document.querySelector(".titulo2");
post.appendChild(produto);
post.appendChild(nome);
post.appendChild(descricao);
post.appendChild(preco);




let venda = document.createElement("div");

venda.innerHTML = `
<h2>Bicicleta<h2/>
<p>bicicleta aro 22'<p/>
<p> Vendo bicicleta velha <p/>
<p> R$ 300.00 <p/>`

let postagemVenda = document.querySelector(".titulo3");
postagemVenda.appendChild(venda);
