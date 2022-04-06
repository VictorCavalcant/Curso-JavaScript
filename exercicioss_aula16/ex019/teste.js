val = [4,7,5,9,2]

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

console.log(`o maior valor se trata do ${maiornum(val)}`)