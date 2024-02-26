// [M1S04] Ex 5 - Laço while
//Utilizando um while, repita uma mini entrevista com 4 usuários 
//perguntando qual a nota para avaliação da série "Stranger Things”, 
//será apenas aceita três tipos de avaliação: ruim, bom e excelente. 
//Depois verifique quantas pessoas classificaram a série como ruim.



// Inicializa a contagem de avaliações
let entrevistados = 0;
let ruim = 0; 
 const total = 4;
  while (entrevistados < total) {

   // Verifica a avaliação do usuário
    const resposta = prompt("Como você avalia a série Stranger Things?\n(Responda somente: ruim, bom ou excelente)");
     if (resposta.toLowerCase() === "ruim")
      { ruim++; } entrevistados++; }
      
       // Imprime o número de pessoas que classificaram a série como ruim
       alert(`Número de entrevistados que acham a série ruim: ${ruim}`);

