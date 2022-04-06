function contar(){
    var ini = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var pass = document.getElementById("txtpasso")
    var i = Number(ini.value)
    var p = Number(pass.value)
    var f = Number(fim.value)
    var res = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert("[ERROR] Há dados ausentes!")
        res.innerHTML = 'Não é possivel contar!'
    }
    else {
      if (p <= 0) {
      window.alert("É impossivel contar usando '0' ou menor que ele, considerando passo igual a 1")
      p = 1
    } if (f > i) {
    res.innerHTML = `Contando: <br>`
    for(var c = i; c <= f; c += p) {
        res.innerHTML += `${c} &#x1F449; `
    }
    res.innerHTML += ' &#x1F6A9;'
  } else {
    res.innerHTML = `Contando: <br>`
    for(var c = i; c >= f; c -= p) {
      res.innerHTML += `${c} &#x1F449; `
  }
    res.innerHTML += ' &#x1F6A9;'
  }
 } 
}