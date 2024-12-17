// const pesquisa = document.querySelector("#pesquisa");
// const resultado = document.querySelector("#resultado");

// function montarCard(lista_filmes) {
//   resultado.innerHTML = "";
//   lista_filmes.forEach((e) => {
//     const novo_card = document.createElement("div");
//     novo_card.className = "card";

//     // novo_card.addEventListener("click", () => {
//     //   console.log(`Clicou no filme ${e.id}`);
//     // });

//     const imagem = document.createElement("div")
//     const nova_imagem = document.createElement("img");
//     nova_imagem.src = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
//     nova_imagem.className = "img_filme";
//     nova_imagem.alt = `Poster de ${e.title}`;

//     const novo_titulo = document.createElement("h2");
//     novo_titulo.textContent = `${e.title}`;

//     const nova_nota = document.createElement("p");
//     nota = e.vote_average.toFixed(2);
//     nova_nota.textContent = `Nota: ${nota}`;

//     const nova_data = document.createElement("p");
//     nova_data.textContent = `Data de lançamento: ${e.release_date}`;

//     const nova_sinopse = document.createElement("p");
//     nova_sinopse.textContent = `Sinopse: ${e.overview}`;
//     nova_sinopse.className = "sinopse";

//     const estrela = criarEstrela(nota);

//     imagem.append(nova_imagem)
//     novo_card.append(
//       novo_titulo,
//       nova_nota,
//       imagem,
//       nova_data,
//       nova_sinopse,
//       estrela
//     );

//     resultado.appendChild(novo_card);
//   });
// }

// function criarEstrela() {
//   const estrela = document.createElement("img");
//   estrela.src =
//     "https://static.vecteezy.com/system/resources/previews/018/722/931/non_2x/star-shape-symbol-on-transparent-background-free-png.png";
//   estrela.className = "estrela"
//   return estrela;
// }

// async function mostrarFilmesAtuais() {
//   try {
//     const resposta = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR&page=1"
//     );
//     const dados = await resposta.json();
//     const lista_filmes = dados.results;
//     montarCard(lista_filmes);
//   } catch (error) {
//     console.log(error);
//   }
// }

// mostrarFilmesAtuais();

// pesquisa.addEventListener("input", async () => {
//   if (pesquisa.value.length === 0) {
//     mostrarFilmesAtuais();
//   } else {
//     try {
//       const resposta = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=77c4e2b070a2e1396500d0b42ebf7cec&query=${pesquisa.value}&language=pt-BR`
//       );
//       const dados = await resposta.json();
//       const lista_filmes = dados.results;
//       resultado.innerHTML = "";
//       montarCard(lista_filmes);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });

const pesquisa = document.querySelector("#pesquisa");
const resultado = document.querySelector("#resultado");

function montarCard(lista_filmes) {
  resultado.innerHTML = "";
  lista_filmes.forEach((e) => {
    const card = document.createElement("div");
    card.className = "card";

    const nova_imagem = document.createElement("img");
    nova_imagem.src = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
    nova_imagem.className = "img_filme";
    nova_imagem.alt = `Poster de ${e.title}`;

    const pelicula = document.createElement("div");
    pelicula.className = "pelicula";

    const titulo = document.createElement("h2");
    titulo.textContent = e.title;

    const estrela = document.createElement("div");

  
    estrela.className = "estrela";

    const texto_estrela = document.createElement("p")
    texto_estrela.textContent = Number(e.vote_average).toFixed(1)
    
    estrela.append(texto_estrela)
    pelicula.append(titulo, estrela);
    card.append(nova_imagem, pelicula);
    resultado.appendChild(card);
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
  if (pesquisa.value.length === 0) {
    mostrarFilmesAtuais();
  } else {
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
  }
});
