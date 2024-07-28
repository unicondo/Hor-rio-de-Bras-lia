// Exibir horário

function atualizarHorario() {
  const horarioAtual = new Date();

  const horas = pad(horarioAtual.getHours());
  const minutos = pad(horarioAtual.getMinutes());
  const segundos = pad(horarioAtual.getSeconds());

  const horarioTexto = `${horas}:${minutos}:${segundos}`;
  document.getElementById('horario-atual').innerText = horarioTexto;
}

function pad(valor) {
  return valor < 10 ? '0' + valor : valor;
}

setInterval(atualizarHorario, 1000);
atualizarHorario();

// Exibir data

function exibirData() {
  const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  const dataAtual = new Date();
  const diaSemana = diasSemana[dataAtual.getDay()];
  const dia = dataAtual.getDate();
  const mes = meses[dataAtual.getMonth()];
  const ano = dataAtual.getFullYear();

  const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

  const spans = document.getElementsByClassName('data');
  for (const span of spans) {
    span.innerText = dataFormatada;
  }
}