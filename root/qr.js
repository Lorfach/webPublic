document.getElementById('continue').addEventListener('click', function(){
  localStorage.setItem('seller', document.getElementById('solder').value)
  localStorage.setItem('value', document.getElementById('money-i').value)
})