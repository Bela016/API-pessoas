"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`nome: ${this.nome}
        cpf: ${this.cpf}
        data: ${this.data_nascimento}
        telefone: ${this.endereco}
        altura: ${this.altura}
        peso: ${this.peso}`);
    }
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    //
    getCpf() {
        return this.cpf;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    //
    getDataNascimento() {
        return this.data_nascimento;
    }
    setDataNascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    //
    gettelefone() {
        return this.telefone;
    }
    settelefone(_telefone) {
        this.telefone = _telefone;
    }
    //
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    //
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    //
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    // implementar os métodos 
    falar() {
        //lógica de negocio 
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        // lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        //lógica de negocio 
        console.log(`${this.nome} está andando...`);
    }
    andarKm(quilometros) {
        // lógica de negócio
        setTimeout(() => {
            console.log(`${this.nome} andou ${quilometros}`);
        }, 3000);
    }
    comer() {
        //lógica de negocio 
        console.log(`${this.nome} comendo...`);
    }
    comerPrato(prato) {
        // lógica de negócio
        console.log(`${this.nome} comeu ${prato}`);
    }
    /*  CRUD */
    cadastroPessoa(pessoa) {
        console.log(`${pessoa.nome} cadastrado com sucesso`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map