function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
  
    msg.innerText = `Agora são ${hora} horas.`

    if(hora > 4 && hora <=12){
        img.src = "manha.jpg"
        document.body.style.background = "#e2cd9f"
    }
    else if(hora >= 12 && hora <= 18){
        img.src = "tarde.jpg"
        document.body.style.background = "#b9846f"
    }
    else{
        img.src = "noite.jpg"
        document.body.style.background = "#515154"
    }
}