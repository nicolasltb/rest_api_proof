# Proof - API
A Proof-API foi construída para desenvolver uma aplicação que nos permita obter uma lista de IPs de redes Tor (https://www.torproject.org/) a partir de fontes externas, distintas e apresentá-los de maneira unificada. Adicionalmente esta aplicação deve possibilitar a indicação de IPs de redes que NÃO queremos que apareçam na lista.
![alt text](https://media.discordapp.net/attachments/434931484315615242/847252368524705822/unknown.png?width=1335&height=676)

## Rotas da API

### ``` /get_tor (GET) ```
* Faz o web scraping de ips da rede Tor de fontes externas e os unifica em uma única lista.
* Retorna uma lista de endereços da rede Tor.

### ``` /get_tor_filtered ```
* Faz o web scraping de ips da rede Tor de fontes externas e os unifica em uma única lista excluindo os ips do banco de dados (MongoDB).
* Retorna uma lista de endereços da rede Tor filtrada pelos ips indesejados.

### ``` /post_ip ```
* Recebe como dado um ip para ser adicionado ao banco de dados. (POST)
* Não possui retorno.

## Pré-requisitos
Ter uma versão atualizada do NodeJS instalada em sua máquina e um gerenciador de pacotes (yarn ou npm). Além disso, se você desejar, poderá rodar a aplicação em um container docker. Para isso será necessario que o docker esteja instalado em sua máquina.

## Como executar

### NPM ou YARN
Primeiramente clone o repositório com o comando:
```
git clone https://github.com/nicolasltb/rest_api_proof.git
```
vá até a paste do projeto e digite:
```
yarn ou npm install
```
para instalar as dependencias, e
```
yarn start ou npm start
```
para executar o projeto.

### Docker container
Primeiramente clone o repositório com o comando:
```
git clone https://github.com/nicolasltb/rest_api_proof.git
```
vá até a paste do projeto e digite:
```
yarn ou npm install
```
para instalar as dependencias, e
```
docker-composer up
```
para executar o projeto.

## Aviso
Para rodar corretamente e não ter erros relacionados ao banco de dados, substitua o 'process.env.DB_CONNECTION' do arquivo db_config.js para a url de conexão do seu banco de dados MongoDB.