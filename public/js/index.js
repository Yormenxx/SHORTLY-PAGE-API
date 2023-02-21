

const linkShortened = document.getElementById("linkShortened");

const btn           = document.getElementById("btn_shortened");

const linkOriginal  = document.getElementById("linkOriginal");

const btnCopy       = document.getElementById("btn_copiar");


async function getShortenLink(){

    const inputForm = document.getElementById("input_form").value;

    if(inputForm.length==0){
        alert("Ingrese una Url primero")
    }else{

        
    linkOriginal.textContent = inputForm;

    const urlApi    = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(inputForm)}`;

    const response  = await fetch(urlApi);

    const data      = await response.json();

    document.querySelector(".container-link-shortened").classList.add("visible")
    
    const resultUrlLink=data.result.full_short_link;


    linkShortened.textContent=resultUrlLink;


    }

    
}

function copiarText(){
    linkShortened;
    btnCopy;
    navigator.clipboard.writeText(linkShortened.textContent)
    btnCopy.textContent="copiado"
}

btn.addEventListener("click",getShortenLink);


