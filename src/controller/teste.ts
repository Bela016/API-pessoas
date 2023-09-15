import { Pessoa } from "../model/pessoa"

let pessoa = new Pessoa ('joão', '1111111111',new Date (2000,9,15),'00000000000','rua numero 1', 170,70);


pessoa.falar();
pessoa.falarFrase('aleatorio');

console.log("\n");

let pessoa2 = new Pessoa ('maria', '33333333333', new Date (1972,8,29),'99999999999','rua das corridas',165,65);
pessoa2.andar();
pessoa2.andarKm(20);
console.log("\n");

let pessoa3 = new Pessoa ('garfield','22222222222222',new Date (1978,6,19),'99999999999','rua das lasanhas',40,15);

pessoa3.comer();
pessoa3.comerPrato("lasanha");

console.log("\n");

pessoa.mostraPessoa();
pessoa2.mostraPessoa();
pessoa3.mostraPessoa();

console.log("\n");
