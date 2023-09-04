// classes abstratas
class Forma {
  constructor(tipo){
    this.tipo = tipo
  }

  calcularArea(){
    throw new Error("Metodo deve ser implementado nas outras classes")
  }
}

class Retangulo extends Forma{
  constructor(largura,altura){
    super("Retangulo")
    this.largura = largura
    this.altura = altura
  }
  calcularArea(){
    return this.largura * this.altura;
  }
}

class circulo extends Forma{
  constructor(raio){
    super("Circulo")
    this.raio = raio
  }
  calcularArea(){
    return Math.PI * this.raio * this.raio
  }
}


class Trapezio extends Forma {
  constructor(baseMaior, baseMenor, altura) {
    super("Trapézio");
    this.baseMaior = baseMaior;
    this.baseMenor = baseMenor;
    this.altura = altura;
  }
  calcularArea() {
    return ((this.baseMaior + this.baseMenor) * this.altura) / 2;
  }
}

const contaRetangulo = new Retangulo(2, 10);
console.log(`a forma é ${contaRetangulo.tipo} altura ${contaRetangulo.altura}
  largura ${contaRetangulo.largura} e p resultado ${contaRetangulo.calcularArea()}
`)

const contaCirculo = new circulo(2);

console.log(`o tipo é ${contaCirculo.tipo}
a conta é ${contaCirculo.calcularArea()}
`)


const contaTrapezio = new Trapezio(4, 6, 3);
console.log(`O tipo é ${contaTrapezio.tipo},
a área é ${contaTrapezio.calcularArea()}`);