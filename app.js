function pesquisar() {
     // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
   let section = document.getElementById("resultados-pesquisa");
 
   let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

// se campoPesquisa for uma string sem nada
   if (!campoPesquisa || !/[a-zA-Z0-9]/.test(campoPesquisa)) {
      section.innerHTML = "<p class = 'mensagem-aviso'> Nada Foi Encontrado, Digite o Nome do Filme</p>"
         return;
   }

      campoPesquisa = campoPesquisa.toLowerCase()

   // Inicializa uma string vazia para armazenar os resultados da pesquisa
   let resultados = "";
   let titulo = "";
   let descricao = "";
   let tags = "";

   // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
   for (let dado of dados) {
         titulo = dado.titulo.toLowerCase()
         descricao = dado.descricao.toLowerCase()
         tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Cria um novo elemento
         resultados += `
         <div class="item-resultado"> 
                      <h2>${dado.titulo}</h2>
                      <p class="descricao-meta">${dado.descricao}</p>

                      <a href=${dado.link} target="_blank">Mais Informações</a>
                  </div>
      `;
      }  
   }
 
if (!resultados) {
   resultados = "<p class = 'mensagem-aviso'>Nada Foi Encontrado</p>"
}

// Atribui os resultados gerados à seção HTML
   section.innerHTML = resultados;
 }


 

 // Obtém o elemento de input e adiciona o ouvinte de eventos (fora da função pesquisar)
const campoPesquisa = document.getElementById("campo-pesquisa");
campoPesquisa.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    pesquisar();
  }
});