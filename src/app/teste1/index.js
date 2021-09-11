class Votos {
    constructor()
    {
        this.totalEleitores = 1000;
        this.validos = 800;
        this.brancos = 150;
        this.nulos = 50;
    }

    calcularPercentualValidos()
    {
        return (this.validos * 100) / this.totalEleitores;
    }

    calcularPercentualBrancos()
    {
        return (this.brancos * 100) / this.totalEleitores;
    }

    calcularPercentualNulos()
    {
        return (this.nulos * 100) / this.totalEleitores;
    }
}

module.exports = new Votos();

const votos = new Votos();

console.log(`Total de votos válidos ${votos.calcularPercentualValidos()}%`);
console.log(`Total de votos brancos ${votos.calcularPercentualBrancos()}%`);
console.log(`Total de votos nulos ${votos.calcularPercentualNulos()}%`);