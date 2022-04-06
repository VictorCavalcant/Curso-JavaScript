function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        msg.innerHTML += ' Bom dia!'
        img.src = 'foto_de_manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'foto_de_tarde.png'
        document.body.style.background = '#FB7900'
    } else if (hora >= 18){
        msg.innerHTML += ' Boa noite!'
        img.src = 'foto_de_noite.png'
        document.body.style.background = '#050069'
    } else {
        msg.innerHTML += ' Boa madrugada!'
        img.src = 'foto_de_madrugada.png'
        document.body.style.background = '#01000E'
    }
}

