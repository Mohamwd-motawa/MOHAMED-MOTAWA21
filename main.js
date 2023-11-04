let btn =document.getElementById('m1');
let pan =document.getElementById('m2');

let Names = ['سيشن كاجول ','سيشن كتب كتاب', 'تابلوه صغير ', 'تابلوه كبير', '20كارت صغير','20كارت كبير']

btn.addEventListener('click',
    function (){
        var winner =Names[Math.floor(Math.random()*Names.length)]
        pan.innerHTML=winner;
    }
)





const start = document.getElementById('start')
const form = document.getElementById('form-sh')
const clos = document.getElementById('clos')


start.addEventListener('click',function(){
    form.style.display = 'block'
   
})

clos.addEventListener('click',function(e){
    e.preventDefault();
    form.style.display = 'none'
})