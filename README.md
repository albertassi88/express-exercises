## DEPLOY - Deploy é publicar uma aplicação em um servidor e deixar ela disponível (pública).

## Deploy com Heroku - (Heroku é aonde podemos armazenar e hospedar a nossa aplicação).

## Dyno - Exemplo: pega todos os arquivos de código e configuração que escrevemos e enfia em uma caixa e bota pra rodar, isso é um dyno.

### Realizando o Deploy: 
#### 1 - heroku create // criar um novo app
#### 2 - heroku apps // lista os apps criados
#### 3 - heroku local web // rodar localmente o heroku
#### 4 - git add .
#### 5 - git commit -m "Comitando"
#### 6 - git push heroku master //enviando para o heroku

#### heroku logs --app <nome da aplicação> exemplo: blomin-atol-59875 //acessar o log da aplicação

#### heroku logs --app -t <nome da aplicação> //monitora em tempo real, tipo o nodemon 

#### heroku config:set QUALQUER_NOME=homologacao --app <nome-de-aplicação> exemplo:blooming-atoll-66992 //criando chave de ambiente

### Instalações:

#### npm install
#### npm i express
#### npm init -y

"scripts": {
    "start": "node index.js"
},