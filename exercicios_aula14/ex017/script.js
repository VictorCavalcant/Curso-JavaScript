function calcular() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltabua')
    var c = 1
    var r = 0
    if (num.value.length == 0) {
        window.alert('[ERROR] HÁ DADOS AUSENTES!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            r = n * c
            item.text = `${n}x${c} = ${r}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}