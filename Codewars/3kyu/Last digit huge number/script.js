function Mod(base , exponente, operador) {
    return Math.round((base  % operador) * Math.pow((base  % operador), (exponente + 3) % 4)) % operador;
}

function lastDigit(ListaNum) {
    if (ListaNum.length == 0) return 1;
    let laDerechaEscero = false;
    let laDerechaEsMayorQue2 = false;
    let laDerechaMod4 = 1;
    for (let i = ListaNum.length - 1; i > 0; --i) {
        if (laDerechaEscero) {
            laDerechaMod4 = 1;
            laDerechaEscero = false;
            laDerechaEsMayorQue2 = false;
        } 
        else {
            laDerechaMod4 = (laDerechaEsMayorQue2 && (ListaNum[i] % 4 === 2)) ? 0 : Mod(ListaNum[i], laDerechaMod4, 4);
            laDerechaEscero = ListaNum[i] === 0;
            laDerechaEsMayorQue2 = !laDerechaEscero && !(ListaNum[i] === 1)
        }
    }

    
    return laDerechaEscero ? 1 : Mod(ListaNum[0], laDerechaMod4, 10);
}