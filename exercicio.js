function Veiculo(fabricante, modelo, ano, motorizacao, cor) {
    this.fabricante = fabricante
    this.modelo = modelo;
    this.ano = ano;
    this.motorizacao = motorizacao;
    this.cor = cor;
}

//Ignore o nome das functions kkkk, tava sem criatividade.

function Carro(fabricante, modelo, ano, motorizacao, cor) {
    Veiculo.call(this, fabricante, modelo, ano, motorizacao, cor);

    this.vrumm = function() {
        console.log('Vruuummmm!')
    }
}

function Moto(fabricante, modelo, ano, motorizacao, cor) {
    Veiculo.call(this, fabricante, modelo, ano, motorizacao, cor);

    this.randandan = function() {
        console.log('Randandand!')
    }
}

const civic = new Carro('honda','civic', 2020, 'prata');
const siena = new Carro('fiat', 'siena', 2010, 'azul');
const fazer = new Moto('honda', 'fazer', 2017, 'branco');

//Fiz o exercicio 3 vezes, porque fui inventar de tentar usar o console.table().

console.log(civic.vrumm(),fazer.randandan(),siena);