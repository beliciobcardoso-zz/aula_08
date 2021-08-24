let altura = 2.10;
let acompanhado = false;

function podeSubir(altura, acompanhado) {

    if ((altura >= 1.40 && altura <= 2.00) || (altura >= 1.20 && altura <= 1.39 && acompanhado == true)) {
        return console.log("Acesso autorizado!");
    } else if ((altura >= 1.20 && altura <= 1.39) && acompanhado == false) {
        return console.log("Acesso autorizado somente com acompanhante!");
    } else {
        return console.log("Acesso negado!!!!");
    }
}
podeSubir(altura, acompanhado);