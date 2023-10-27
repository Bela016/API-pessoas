export class Pessoa {
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;


    public constructor
        (_nome: string,
            _cpf: string,
            _data_nascimento: Date,
            _telefone: string,
            _endereco: string,
            _altura: number,
            _peso: number) {

        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco
        this.altura = _altura;
        this.peso = _peso;
    }

    public mostraPessoa(){
        console.log(`nome: ${this.nome}
        cpf: ${this.cpf}
        data: ${this.data_nascimento}
        telefone: ${this.endereco}
        altura: ${this.altura}
        peso: ${this.peso}`)
    }

    public getNome() {// nn tem parametro mas tem return
        return this.nome;
    }

    public setNome(_nome: string) {// tem parametro e nao tem retono , set= atribuir
        this.nome = _nome;
    }
    //
    public getCpf() {
        return this.cpf;
    }

    public setCpf(_cpf: string) {
        this.cpf = _cpf;
    }
    //
    public getDataNascimento() {
        return this.data_nascimento;
    }
    public setDataNascimento(_data_nascimento: Date) {
        this.data_nascimento = _data_nascimento;
    }
    //
    public gettelefone() {
        return this.telefone;
    }
    public settelefone(_telefone: string) {
        this.telefone = _telefone;
    }
    //
    public getEndereco() {
        return this.endereco;
    }
    public setEndereco(_endereco: string) {
        this.endereco = _endereco;
    }
    //
    public getAltura() {
        return this.altura;
    }
    public setAltura(_altura: number) {
        this.altura = _altura;
    }
    //
    public getPeso() {
        return this.peso;
    }
    public setPeso(_peso: number) {
        this.peso = _peso;
    }


    // implementar os métodos 

    public falar() : void {
        //lógica de negocio 
        console.log(`${this.nome} está falando`);
    }

    public falarFrase(_frase: string){
        // lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar() : void {
        //lógica de negocio 
        console.log(`${this.nome} está andando...`);
    }
    public andarKm( quilometros: number): void{
        // lógica de negócio
        setTimeout(() =>{
            console.log(`${this.nome} andou ${quilometros}`);
        }, 3000);
        
    }

    public comer() : void {
        //lógica de negocio 
        console.log(`${this.nome} comendo...`);
    }
    public comerPrato(prato: string):void{
        // lógica de negócio
        console.log(`${this.nome} comeu ${prato}`);
    }

    /*  CRUD */

     cadastroPessoa(pessoa:Pessoa){
        console.log(`${pessoa.nome} cadastrado com sucesso`);
     }
}

