// o que eu quero alterar?
// usuario escolha datas para calcular quanto tempo falta


const anoNovo = '1 Jan 2021';
const diasEl = document.getElementById('days');
const horasEl = document.getElementById('hours');
const minutosEl = document.getElementById('minutes');
const segundosEl = document.getElementById('seconds');

function contador() {
    const anoNovoData = new Date(anoNovo)
    const dataAtual = new Date();

    const totalSegundos = (anoNovoData - dataAtual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24)
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos % 60);

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formataTempo(horas);
    minutosEl.innerHTML = formataTempo(minutos);
    segundosEl.innerHTML = formataTempo(segundos);
}

function formataTempo(time) {
    return time < 10 ? (`0${time}`) : time;
}

contador()

setInterval(contador, 1000)