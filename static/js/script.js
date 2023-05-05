const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const marcador = setInterval(function time(){
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + second;

    horas.textContent = hour;
    minutos.textContent = minute;
    segundos.textContent = second;
})

//------------ CÓDGIO UTILIZANDO UMA API EM CONSTRULÇÃO AINDA ------------


// faz uma requisição para a API TimeZoneDB para obter o fuso horário da localidade selecionada pelo usuário

// function getTimezoneFromLocation(location) {

//   const apiKey = ''; <-- COLOCAR A CHAVE DA API AQUI 

//   const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${location}`;

//   return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       return data.gmtOffset; // retorna o deslocamento em relação ao UTC em segundos
//     });
// }

// atualiza a hora com base no fuso horário selecionado

// async function updateTime() {
//   const location = document.getElementById('location').value;
//   const timezoneOffset = await getTimezoneFromLocation(location);
//   const now = new Date(Date.now() + timezoneOffset * 1000);
//   const time = now.toLocaleTimeString('pt-BR', { hour12: false });
//   document.getElementById('time').textContent = time;
// }

// adiciona um listener para o botão "Atualizar hora"

// document.getElementById('update-time').addEventListener('click', updateTime);
