class Fatorial {
    calcular(numero) {
        return numero === 0 || numero === 1 ? 1 : numero * this.calcular(numero-1);
    }
}

module.exports = new Fatorial();

const fatorial = new Fatorial();
console.log(fatorial.calcular(6));