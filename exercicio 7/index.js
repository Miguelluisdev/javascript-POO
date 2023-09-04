class Vaga {
  constructor(titulo, descricao, empresa) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.empresa = empresa;
    this.candidatos = [];
  }

  adicionarCandidatos(candidato) {
    this.candidatos.push(candidato);
  }

  listarCandidatos() {
    console.log(`Candidatos para a vaga de ${this.titulo} na empresa ${this.empresa.nome}:`);
    this.candidatos.forEach((candidato, index) => {
      console.log(`${index + 1}. ${candidato.nome}`);
    });
  }
}

class Candidato {
  constructor(nome, habilidades) {
    this.nome = nome;
    this.habilidades = habilidades;
  }

  seCandidatar(vaga) {
    vaga.adicionarCandidatos(this);
  }
}

class Empresa {
  constructor(nome) {
    this.nome = nome;
  }

  criarVaga(titulo, descricao) {
    return new Vaga(titulo, descricao, this);
  }
}

const empresa1 = new Empresa("MEc.inc");
const empresa2 = new Empresa("Ads.ec");

const candidato1 = new Candidato("darius", ["javascript", "react"]);
const candidato2 = new Candidato("diclk", ["python", "panda"]);
const candidato3 = new Candidato("maria", ["java", "spring"]);

const vaga1 = empresa1.criarVaga("Desenvolvedor Web", "Desenvolvimento de aplicativos web");
const vaga2 = empresa2.criarVaga("Engenheiro de Dados", "Análise e processamento de dados");

// Candidatos se candidatando a vagas
candidato1.seCandidatar(vaga1);
candidato2.seCandidatar(vaga1);
candidato3.seCandidatar(vaga2);

// Listar candidatos para vagas
vaga1.listarCandidatos();
vaga2.listarCandidatos();
