
document.addEventListener("DOMContentLoaded", efeitoDigitacao);
  
  const frases = [
    "Transformando Ideias Em Realidade Digital.",
    "Automatizando Tarefas.",
    "Analisando Dados e Criando Painéis e Dashboards."
  ];
  
  const TempoDigitacao = 100; // Velocidade de digitação (ms)
  const tempoApagar = 50; // Velocidade ao apagar (ms)
  const tempoEntreFrases = 2000; // Tempo entre frases (ms)
  const elementoDigitador = document.querySelector("#typing-text");
  
  let indexAtualFrase = 0;
  let indexCaracterFrase = 0;
  
  function digitação() {
    if (indexCaracterFrase < frases[indexAtualFrase].length) {
      elementoDigitador.textContent += frases[indexAtualFrase].charAt(indexCaracterFrase);
      indexCaracterFrase++;
      setTimeout(digitação, TempoDigitacao);
    } else {
      setTimeout(apagar, tempoEntreFrases);
    }
  }
  
  function apagar() {
    if (indexCaracterFrase > 0) {
      elementoDigitador.textContent = frases[indexAtualFrase].substring(0, indexCaracterFrase - 1);
      indexCaracterFrase--;
      setTimeout(apagar, tempoApagar);
    } else {
      indexAtualFrase = (indexAtualFrase + 1) % frases.length;
      setTimeout(digitação, TempoDigitacao);
    }
  }
  
  function efeitoDigitacao() {
    digitação();
  }
  

  