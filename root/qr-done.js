document.getElementById('s').textContent = localStorage.getItem('value') + ' ₸';
document.getElementById('ss').textContent = localStorage.getItem('seller');
document.getElementById('sss').textContent = localStorage.getItem('value') + ' ₸';
document.getElementById('seller-t').textContent = localStorage.getItem('seller');

const currentDate = new Date();

const monthNames = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

const currentDay = currentDate.getDate(); // Получить число
const currentMonth = monthNames[currentDate.getMonth()]; // Получить название месяца
const currentHours = currentDate.getHours(); // Получить часы
const currentMinutes = currentDate.getMinutes(); // Получить минуты
const currentYear = currentDate.getFullYear();
const currentSeconds = currentDate.getSeconds();

// Генерация случайной строки из чисел от 1 до 9
function generateRandomNumbers() {
  let randomNumbers = '';
  for (let i = 0; i < 8; i++) {
    const randomNumber = Math.floor(Math.random() * 9) + 1; // Генерация случайного числа от 1 до 9
    randomNumbers += randomNumber.toString();
  }
  return randomNumbers;
}

const text = "QR44";
const randomNumbers = generateRandomNumbers();
const result = text + randomNumbers;

document.getElementById('seller-avatar').textContent = localStorage.getItem('seller')[0];
document.getElementById('check-id').textContent = result;


document.getElementById('date-text').textContent = `${currentDay} ${currentMonth}, ${'0'+currentHours}:${currentMinutes}`;
if(currentDate.getMonth()+1 < 10){
  var month = '0'+Number(currentDate.getMonth()+1);
}else{
  var month = currentDate.getMonth()+1;
}

if(currentDate.getDate() < 10){
  var day = '0'+currentDay;
}else{
  var day = currentDay;
}

if(currentDate.getMinutes() < 10){
  var minutes = '0'+currentMinutes;
}else{
  var minutes = currentMinutes;
}

if(currentDate.getSeconds() < 10){
  var seconds = '0'+currentSeconds;
}else{
  var seconds = currentSeconds;
}

document.getElementById('d').textContent = `${day}.${month}.${currentYear} ${currentHours}:${minutes}:${seconds}`;

document.getElementById('r-c-top-buttons').onclick = function(){
  document.getElementById('real-check-background').style.display = 'none';
};

document.getElementById('add-in-often').onclick = function(){
  document.getElementById('real-check-background').style.display = 'block';
};