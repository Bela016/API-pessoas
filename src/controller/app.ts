import Express  from "express";
import { inicializarPessoas, listarPessoas } from "./bancoDeDados";
//inicializa uma lista de pessoas
inicializarPessoas();
//cria o servidor express
const app = Express();
//define a porta que o servidor
const port: number = 3000;

app.use(Express.json());
//primeira rota
app.get('/', (req , res) => {
    console.log('recebi sua requisição');

    res.send({mensagem: "estou devolvendo a resposta para sua requisição"});
});
//rota para consutar pessoas
app.get('/pessoa',(req,res) =>{
    const listaDePessoas = listarPessoas();

    res.json(listaDePessoas); 
});

app.listen(port,() =>{
    console.log(`servidor Express ouvindo na endereço http://localhost:${port}/`);
});