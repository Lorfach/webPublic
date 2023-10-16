var fullmoney = document.getElementById('money-i').value;
document.getElementById('money-i').addEventListener('input', function(){
    if(document.getElementById('money-i').value.length > 3 && document.getElementById('money-i').value.length < 5){
        var money = document.getElementById('money-i').value[0] + ' ' + document.getElementById('money-i').value[1] + document.getElementById('money-i').value[2] + document.getElementById('money-i').value[3];
    }else if(document.getElementById('money-i').value.length >= 5 && document.getElementById('money-i').value.length < 6){
        var money = document.getElementById('money-i').value[0] + document.getElementById('money-i').value[1] + ' ' + document.getElementById('money-i').value[2] + document.getElementById('money-i').value[3] + document.getElementById('money-i').value[4];
    }else var money = document.getElementById('money-i').value;
    document.getElementById('sss').textContent = money;
    fullmoney = money;
})

document.getElementById('continue').addEventListener('click', function(){
    localStorage.setItem('value', fullmoney)
    localStorage.setItem('seller', document.getElementById('who').value)
})