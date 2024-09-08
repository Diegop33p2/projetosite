
function pesquisar() {
    //Pega a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisas");
    //Pega o texto que será digitado
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //Cria uma string vazia para guardar os resultados

    campoPesquisa = campoPesquisa.toLowerCase();
    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
      section.innerHTML = "Nenhum treino encontrado,digite o nome de um treino ou musculo desejado!"
      return
    };
    
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    //Para cada dado na lista de dados:
    for(let dado of dados) {
      nome = dado.nome.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.join(" ").toLowerCase();
      if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
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
      }
    if(!resultados){
      resultados = "Nenhum treino encontrado,digite o nome de um treino ou musculo de forma correta!"
    }
    //Coloca todos os resultados na seção HTML
    section.innerHTML = resultados;
  }