const mon = document.querySelector('.mon');
const wed = document.querySelector('.wed');
const tue = document.querySelector('.tue');
const thu = document.querySelector('.thu');
const fri = document.querySelector('.fri');
const sat = document.querySelector('.sat');
const sun = document.querySelector('.sun');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const days = document.querySelectorAll('.day');
const todayWeekday = new Date().toLocaleString('en-GB', {
    weekday: 'short',
  }).toLowerCase();

const checkWeekDay = () =>{
    days.forEach(Element =>{
        if(Element.textContent === todayWeekday){
            Element.previousElementSibling.style.backgroundColor= '#76b5bc';
            
        }
    })
}
checkWeekDay()
mon.addEventListener('mouseenter', ()=>{
    one.style.display = 'block';
})
mon.addEventListener('mouseout', ()=>{
    one.style.display = 'none';
})


tue.addEventListener('mouseenter', ()=>{
    two.style.display = 'block';
})
tue.addEventListener('mouseout', ()=>{
    two.style.display = 'none';
})


wed.addEventListener('mouseenter', ()=>{
    three.style.display = 'block';
})
wed.addEventListener('mouseout', ()=>{
    three.style.display = 'none';
})


thu.addEventListener('mouseenter', ()=>{
    four.style.display = 'block';
})
thu.addEventListener('mouseout', ()=>{
    four.style.display = 'none';
})


fri.addEventListener('mouseenter', ()=>{
    five.style.display = 'block';
})
fri.addEventListener('mouseout', ()=>{
    five.style.display = 'none';
})


sat.addEventListener('mouseenter', ()=>{
    six.style.display = 'block';
})
sat.addEventListener('mouseout', ()=>{
    six.style.display = 'none';
})

sun.addEventListener('mouseenter', ()=>{
    seven.style.display = 'block';
})
sun.addEventListener('mouseout', ()=>{
seven.style.display = 'none';
})