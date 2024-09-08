
function pesquisar() {
    //Pega a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisas");
    //Pega o texto que será digitado
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //Cria uma string vazia para guardar os resultados
    let resultados = "";
    //Para cada dado na lista de dados:
    for(let dado of dados) {
    //Cria um novo elemento HTML para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>${dado.nome}</h2>
          <p class="descricao-meta">${dado.parte_do_corpo}</p>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Link</a>
        </div>
      `;
    }
    //Coloca todos os resultados na seção HTML
    section.innerHTML = resultados;
  }