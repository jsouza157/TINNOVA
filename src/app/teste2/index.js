class Ordenacao {
    ordenarVetor ( array ) {
        let swapped = true;
        do {
            swapped = false;
            for (let j = 0; j < array.length; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return array;
    }
}

module.exports = new Ordenacao();

const vetor = [5, 3, 2, 4, 7, 1, 0, 6];
const ordenacao = new Ordenacao();
console.log(ordenacao.ordenarVetor(vetor));