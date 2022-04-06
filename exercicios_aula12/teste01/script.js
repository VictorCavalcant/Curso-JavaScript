function carrega(){
    var data = new Date()
    var atw = data.getDay()
    var atd = data.getDate()
    var atm = data.getMonth() + 1
    var aty = data.getFullYear()
    var res = document.getElementById("data_res")
    res.innerHTML = `Data: ${atd}/0${atm}/${aty} <br>`
    switch (atw) {
        case 0:
            res.innerHTML = `Hoje é <strong>Domingo</strong>`
            break;
        case 1:
            res.innerHTML = `Hoje é <strong>Segunda</strong>`
            break;
        case 2:
            res.innerHTML = `Hoje é <strong>Terça</strong>`
            break;    
        case 3:
            res.innerHTML = `Hoje é <strong>Quarta</strong>`
            break;
        case 4:
            res.innerHTML = `Hoje é <strong>Quinta</strong>`
        case 5:
            res.innerHTML = `Hoje é <strong>Sexta</strong>`
        case 6:
            res.innerHTML = 'Hoje é <strong>Sabado</strong>'
        default:
            break;
    }
}