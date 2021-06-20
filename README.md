## PM2 - PM2 é um gerenciador de processos, ele é um software criado para facilitar e tornar mais eficaz o gerenciamento de processos.

## Vantagens de usar o PM2?
*Maior robustez para as aplicações gerenciadas
*Melhor aproveitamento de recursos
*Monitoramento de aplicações
*Mecanismo de fail safe (à prova de falhas)
*Captura de logs

## Vantagens?
*Suporte nativo a Node.Js
*Modo Cluster (maior controle)
*Interface de gerenciamento online
*Gerenciamento de logs
*Monitoramento de arquivos
*Integração com o Docker
*É o mais utilizado no mercado

## Instalação:
npm install pm2@latest -g

## Comandos Básicos:
1 - node nome-do-arquivo.js  //executa o script node
2 - pm2 start nome-do-arquivo.js  //inicia o pm2
3 - pm2 start nome-do-arquivo.js --watch --name qualquer-nome  //assistindo as alterações, tipo o nodemon 
4 - pm2 stop nome-do-arquivo.js  //parar o pm2
5 - pm2 stop all  //parar todos processos
6 - pm2 start nome-do-processo --name qualquer-nome  //atualizar o nome do processo
7 - pm2 delete nome-do-processo  //deletar um processo
8 - pm2 restart nome-do-processo  //para e reinicia o processo
9 - pm2 reload nome-do-processo  //melhor do que o restart, pois ele reinicia o processo sem parar a aplicação
10 - pm2 list  //listar todos os processos
11 - pm2 list --sort name:desc  //ordenar a listagem de processos
12 - pm2 show nome-do-processo  //exibir mais detalhes
13 - pm2 logs nome-do-processo  //exibir o histórico
14 - pm2 monit  //visualizar/monitorar em tempo real
15 - pm2 plus  //outra maneira de monitorar em tempo real

## EcoSystem file - É possivel passar um arquivo de configuração para o PM2 executar as aplicações, nele podemos configurar comportamentos, opções, variavéis de ambiente e arquivos de logs de cada aplicação.

OBS: Criar um arquivo na raiz com o nome ecosystem.config.yml e colocar:
apps:
  - name: qualquer-nome
    script: ./index.js
    exec_mode: cluster  //usar o modo cluster
    instances: max  //serve para balancear a aplicação em todos os núcleos(instâncias) da máquina
    watch: true

Comando:
pm2 start ecosystem.config.yml

pm2 [start|restart|stop|delete] ecosystem.config.yml 

## DEPLOY - Deploy é publicar uma aplicação em um servidor e deixar ela disponível (pública).

## Deploy com Heroku - (Heroku é aonde podemos armazenar e hospedar a nossa aplicação).

## Dyno - Exemplo: pega todos os arquivos de código e configuração que escrevemos e enfia em uma caixa e bota pra rodar, isso é um dyno.

Realizando o Deploy: 
1 - heroku create // criar um novo app
2 - heroku apps // lista os apps criados
3 - heroku local web // rodar localmente o heroku
4 - git add .
5 - git commit -m "Comitando"
6 - git push heroku master //enviando para o heroku

heroku logs --app <nome da aplicação> exemplo: blomin-atol-59875 //acessar o log da aplicação
heroku logs --app -t <nome da aplicação> //monitora em tempo real, tipo o nodemon 

## Instalações:
npm install
npm i express
npm init -y

"scripts": {
    "start": "node index.js"
},