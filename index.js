const express = require('express');

const randomColor = require('random-hex-color')(); //npm install --save random-hex-color

const app = express();

const QUALQUER_NOME = process.env.QUALQUER_NOME || 'Não foi:' //Variável de Ambiente
/*
process - através do módulo process, o node tem acesso aos processos do sistema.
env -  são variáveis de ambiente do sistema.
Comando: heroku config:set QUALQUER_NOME=homologacao --app <nome-de-aplicação> exemplo:blooming-atoll-66992
Enviar a variável de ambiente que criei com o nome de homologação para o heroku
*/


//Simular um bug no processo para ele cair e o pm2 criar um novo processo sem a minha aplicação ficar fora do ar.

app.get('/', (req, res) => {
    res.type('text/html').send(`
    <body style="background-color: ${randomColor};">
        <h2>Processo número ${process.pid}</h2> 
    </body>
    `);
});

app.get('/bug', (_, res) => {
    res.send('Aconteceu um bug no sistema');
    process.exit(0); //server para parar o processo
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Porta ${PORT}`));


/*O que são variáveis de ambiente?

Quando um programa é executado, ele recebe informações do ambiente em que ele está sendo executado. Essas informações de ambiente são 
passadas implicitamente via variáveis de ambiente. Esses valores são, por exemplo, o locale do sistema, tipo do terminal, etc.
Elas são valores nomeados dinamicamente no sistema operacional, que afeta o comportamentos dos programas que o consome. 
Elas são guardadas em uma "lista" de chave-valor.
Todos os valores das variáveis de ambiente são strings não nulas.
Geralmente, guardamos configurações nessas variáveis, tanto do usuário logado no sistema, como system-wide.*/


/*Quando devo usa-lás?

Existem vários usos das variáveis de ambiente. Um uso frequente é para guardar chaves e senhas, embora existam métodos melhores. 
Ao invés de você ter diversas constantes na sua aplicação para guardar chaves de API, senhas de banco de dados e essas coisas, 
por que não colocá-las em variáveis de ambiente? */