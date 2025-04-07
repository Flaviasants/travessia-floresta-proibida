let rodada = 1;
while (rodada <= 3) {
  console.log("Travessia da Floresta - Fase: " + rodada);

  let escolhaJogador = prompt("Fase " + rodada + ": Escolha um caminho (1, 2 ou 3) para seguir pela Floresta Proibida:");
  let caminhoAmaldiçoado = Math.floor(Math.random() * 3) + 1;

  if (escolhaJogador == caminhoAmaldiçoado) {
    alert("⚠️ Você entrou no caminho amaldiçoado! Uma Acromântula te encontrou. Game over!");
    rodada = 1000;
  } else {
    alert("✨ Você passou em segurança! A trilha amaldiçoada era a número " + caminhoAmaldiçoado + ".");
  }

  rodada = rodada + 1;
}

if (rodada == 4) {
  alert("🏆 Parabéns, bruxo(a)! Você sobreviveu à Travessia da Floresta Proibida!");
}
