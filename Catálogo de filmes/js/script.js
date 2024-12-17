const pesquisa = document.querySelector("#pesquisa");
const resultado = document.querySelector("#resultado");

function montarCard(lista_filmes) {
  resultado.innerHTML = "";
  lista_filmes.forEach((e) => {
    const novo_card = document.createElement("div");
    novo_card.className = "card";

    const nova_imagem = document.createElement("img");
    nova_imagem.src = `https://image.tmdb.org/t/p/w500${e.poster_path}`
    nova_imagem.alt = `Poster de ${e.title}`

    const novo_titulo = document.createElement("p");
    novo_titulo.textContent = `Título: ${e.title}`;

    const nova_nota = document.createElement("p");
    nova_nota.textContent = `Nota: ${e.vote_average}`;

    const nova_data = document.createElement("p");
    nova_data.textContent = `Data de lançamento: ${e.release_date}`;

    const nova_sinopse = document.createElement("p");
    nova_sinopse.textContent = `Sinopse: ${e.overview}`;

    novo_card.append(
      nova_imagem,
      novo_titulo,
      nova_nota,
      nova_data,
      nova_sinopse
    );

    resultado.appendChild(novo_card);
  });
}

async function mostrarFilmesAtuais() {
  try {
    const resposta = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR&page=1"
    );
    const dados = await resposta.json();
    const lista_filmes = dados.results;
    montarCard(lista_filmes);
  } catch (error) {
    console.log(error);
  }
}

mostrarFilmesAtuais();

pesquisa.addEventListener("input", async () => {
  try {
    const resposta = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77c4e2b070a2e1396500d0b42ebf7cec&query=${pesquisa.value}&language=pt-BR`
    );
    const dados = await resposta.json(); 
    const lista_filmes = dados.results;
    resultado.innerHTML = ""; 
    montarCard(lista_filmes);
  } catch (error) {
    console.log(error);
  }
});
