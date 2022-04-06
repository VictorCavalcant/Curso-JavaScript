var num = document.getElementById('txtn')
var tel = document.getElementById('vtela')
var val = []
var res = document.getElementById('res')
var item = document.createElement('option')
var act = 0

function IsNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
    return false
    }
}

function intel(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiciona() {
    if (IsNumber(num.value) && !intel(num.value,val)) {
        val.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${(num.value)} foi adicionado!`
        tel.appendChild(item)
    } else {
        window.alert('[ERROR] Dados inválidos ou ja presente na lista!')
    }
    num.value = ''
    num.focus()
}

function maiornum(l) {
    var maior = 0
    maior = l[0]
    for (var c in l) {
        d = Number(c) + 1
        if(maior < l[d]) {
            maior = l[d]
        } else {
            continue
        }
    } return maior
}


function menornum(l) {
    var menor = 0
    menor = l[0]
    for (var c in l) {
        d = Number(c) + 1
        if(menor > l[d]) {
            menor = l[d]
        } else {
            continue
        }
    } return menor
}

function soma(l) {
    var s = 0
    for (var c in l){
        s += l[c]
    } return s
} 

function media(l){
    var m = 0
    for (var c in l){
        m += l[c]
    } 
    m /= l.length
    return m
}


function finaliza() {
    if (val.length == 0) {
        window.alert('Por favor adicione elementos antes de finalizar!')
    } else {
    res.innerHTML = ''
    res.innerHTML += `<p>No total, temos ${val.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior número é o: ${maiornum(val)}</p>`
    res.innerHTML += `<p>O menor número é o: ${menornum(val)}</p>`
    res.innerHTML += `<p>A soma do valores é de: ${soma(val)}</p>`
    res.innerHTML += `<p>A média dos valores é de: ${media(val)}</p>`
    }
}