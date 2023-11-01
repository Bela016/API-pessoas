"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bancoDeDados_1 = require("./bancoDeDados");
//inicializa uma lista de pessoas
(0, bancoDeDados_1.inicializarPessoas)();
//cria o servidor express
const app = (0, express_1.default)();
//define a porta que o servidor
const port = 3000;
app.use(express_1.default.json());
//primeira rota
app.get('/', (req, res) => {
    console.log('recebi sua requisição');
    res.send({ mensagem: "estou devolvendo a resposta para sua requisição" });
});
//rota para consutar pessoas
app.get('/pessoa', (req, res) => {
    const listaDePessoas = (0, bancoDeDados_1.listarPessoas)();
    res.json(listaDePessoas);
});
app.listen(port, () => {
    console.log(`servidor Express ouvindo na endereço http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map