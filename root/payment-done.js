document.getElementById('s').textContent = localStorage.getItem('seller');
document.getElementById('ss').textContent = localStorage.getItem('value');
document.getElementById('sss').textContent = localStorage.getItem('value');
document.getElementById('seller-avatar').textContent = localStorage.getItem('seller')[0];
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
  
document.getElementById('d').textContent = `${day}.${month}.${currentYear} ${currentHours}:${minutes}`;

document.getElementById('r-c-top-buttons').onclick = function(){
    document.getElementById('real-check-background').style.display = 'none';
  };
  
  document.getElementById('receipt').onclick = function(){
    document.getElementById('real-check-background').style.display = 'block';
  };