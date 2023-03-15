document.getElementById('white').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = 'white';
})
document.getElementById('Dark').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = '#10101B';
})
document.getElementById('green').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = 'green';
})
document.getElementById('purple').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = 'purple';
})
document.getElementById('blue').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = 'blue';
})
document.getElementById('lightBlue').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = 'lightBlue';
})
document.getElementById('orange').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = 'orange';
})
document.getElementById('yellow').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.backgroundColor = 'yellow';
})




function generatePin(){
    const random = Math.round(Math.random()*10000) + '';
    const randomPinField = document.getElementById('randomPinField');
    randomPinField.value = random;
    console.log(random)
}

document.getElementById('calculate').addEventListener('click', function(event){
    const number = event.target.innerText;
    const displayCalculate = document.getElementById('displayCalculate');
    const prevNumber = displayCalculate.value;
    if(isNaN(number)){
        if(number === 'C'){
            displayCalculate.value = '';
        }
        else if(number === '<'){
            const digits = prevNumber.split('');
            digits.pop();
            const remaining = digits.join('');
            displayCalculate.value = remaining;
        }
    }
    else{
        const newNumber = prevNumber + number
        displayCalculate.value = newNumber;
    }

})

function matchNumber(){
    const randomPinField = document.getElementById('randomPinField').value;
    const displayCalculate = document.getElementById('displayCalculate').value;

    const NoMassage = document.getElementById('No-Massage');
    const YesMassage = document.getElementById('Yes-Massage');

    if(randomPinField === displayCalculate){
        YesMassage.style.display = 'block';
        NoMassage.style.display = 'none';
    }
    else{
        NoMassage.style.display = 'block';
        YesMassage.style.display = 'none';
        const tryText = document.getElementById('tryText');
        tryText.style.display = 'block'
    }

}
