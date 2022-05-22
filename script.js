function show_hide(selector,massiv){
    massiv.forEach(e=>{
           document.getElementById(e).classList.add('d-none')
    });
    document.getElementById(selector).classList.remove('d-none')

}


async function get(link){
    let data= await fetch(link);

    let natija =await data.json();
    return natija;
}


 async function suralar(){
    show_hide('Suralar',['details','Home'])
let data =await get('http://api.alquran.cloud/v1/surah');


data.data.forEach((e)=>{
    let row =document.querySelector('#Suralar .row');
    row.innerHTML+=` <div onclick="oyatlar('${e.number}')" class="col-3 text-center mb-2" >

    <div class="card  p-4" style="border: 2px solid black;">
        <div class="card-body">
            ${e.englishName}
        </div>
    </div>
</div>`
})

}


async function  oyatlar(id){
    let ul =document.querySelector('#details .list-group');

    ul.innerHTML=''
    document.querySelector('.loader').classList.remove('d-none')
    show_hide('details',['Home','Suralar'])
    let uz =await get(`https://api.alquran.cloud/v1/surah/${id}/uz.sodik`)
    let arab =await get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
 


    let arab_massiv=arab.data.ayahs;
    uz.data.ayahs.forEach((e,i)=>{
        ul.innerHTML+=`
        <li class="list-group-item">
        <audio  controls>
  <source src="${arab_massiv[i].audio}" type="audio/mpeg">
</audio>
        <div>${i+1}) ${e.text}</div>
        <div style="text-align:end">${arab_massiv[i].text}</div>
    </li>`
    });

    document.querySelectorAll('#details .list-group audio').forEach((e,i)=>{
        e.onended=()=>{
        
            document.querySelectorAll('#details .list-group audio')[i+1].play()
        }
    })

    document.querySelector('.loader').classList.add('d-none')
    

}


function yodlash(){

    let input = document.getElementById('cut').value.split('-');

    let begin= input[0]
    let end= input[1]

    document.querySelectorAll('#details .list-group audio')[begin].play();

    document.querySelectorAll('#details .list-group audio')[end].onended=()=>{
        document.querySelectorAll('#details .list-group audio')[begin].play();

    }
}

function search2(){
    

    let input = document.getElementById('c').value
    

    document.querySelectorAll('#details li').forEach(e=>{
        if(!e.innerText.includes(input)){
            e.classList.add('d-none')
        }else{
            e.classList.remove('d-none')

        }
    })
}


