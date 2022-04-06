function verifica(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERROR] Coloque dados válidos!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 4 && idade < 13) {
                img.setAttribute('src','Crianca_m.png')
            } else if (idade < 21){
                img.setAttribute('src','Jovem_m.png')
            } else if (idade < 50) {
                img.setAttribute('src','Adulto_m.png')
            } else  {
                img.setAttribute('src','Idoso_m.png')
            }
        }   else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 4 && idade < 13) {
                img.setAttribute('src','Crianca_f.png')
            } else if (idade < 21){
                img.setAttribute('src','Jovem_f.png')
            } else if (idade < 50) {
                img.setAttribute('src','Adulto_f.png')
            } else  {
                img.setAttribute('src','Idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
        document.getElementById('foto').style.padding = '40px'
        
    }
}