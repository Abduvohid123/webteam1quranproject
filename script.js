function show_hide(selector){
    document.querySelectorAll('.nav-link').forEach(e=>{
           document.getElementById(e.innerHTML).classList.add('d-none')
    });
    document.getElementById(selector).classList.remove('d-none')

}


async function get(link){
    let data= await fetch(link);

    let natija =await data.json();
    return natija;
}


 async function suralar(){
    show_hide('Suralar')
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

    show_hide('details')
    let uz =await get(`https://api.alquran.cloud/v1/surah/${id}/uz.sodik`)
    let arab =await get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
 
    let ul =document.querySelector('#details .list-group');


    let arab_massiv=arab.data.ayahs;
    uz.data.ayahs.forEach((e,i)=>{
        ul.innerHTML+=`
        <li class="list-group-item">
        <div>${e.text}</div>
        <div style="text-align:end">${arab_massiv[i].text}</div>
    </li>`
    })

}
