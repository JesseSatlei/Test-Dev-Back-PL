# Diwe

## Objetivo
Esse projeto tem como objetivo construir uma Api Rest para o Cadastro de Pets, utilizando da autentificação via JWT e boas práticas de códigos.

## Ferramentas que precisam ser Instaladas para Utilização
NodeJS
Npm ou Yarn
Nest Globalmente
Docker

## Guia de Instalação

O NodeJs pode ser instalado baixando o aplicativo de instalação no site oficial:
https://nodejs.org/en/ - Opte pela versão LTS

Npm é instalado automaticamente com o Node.
Para instalar o Yarn rode o seguinte comando:
```bash
$ npm install -g yarn
```

Para instalar o Nest Globalmente rode o seguinte comando:
```bash
$ npm i -g @nestjs/cli
```
Para instalar o Docker no Linux, rode os seguintes comandos:

```bash
$ sudo apt-get update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-get install docker.io docker-compose

# Testa se a Aplicação foi instalada corretamente
$ sudo docker run hello-world

# Esse aqui é pra colocar seu user no grupo do docker, depois de rodar esse vai precisar reiniciar o pc
$ sudo usermod -aG docker $USER
```

Depois de Clonado o Projeto, rode o seguinte comando para instalar as dependencias:
```bash
$ npm install ou yarn install
```

## Rodando o Aplicativo

```bash
# Na raiz do Projeto rode o seguinte comando:
$ docker composer up -d

# Irá rodar a aplicação
$ npm run start:dev

```

## Rotas e Dados

As rotas que possuirem "Privado" deverão conter um Bearer Token com o Token gerado na rota de Autentificação.
Então para a utilização crie um novo usuario e depois realize a autentificação.

```bash
### Rotas Usuario
http://localhost:3000/users/ - GET - Resgata todos os Usuarios - Privado - Sem 
http://localhost:3000/users/{id_usuario} - GET - Resgata um usuario - Privado
http://localhost:3000/users/ - POST - Cria um novo usuario - Publico - JSON body {
    "email": "teste@teste.com",
    "password": "123456789"
}
http://localhost:3000/users/{id_usuario} - PATCH - Atualiza um usuario - Privado  - JSON body {
    "email": "teste@teste.com",
    "password": "1234"
}
http://localhost:3000/users/{id_usuario} - DELETE - Deleta um usuario - Privado

### Rotas de Autentificação
http://localhost:3000/auth/login - POST - Gera um Token para que possa ser utilizado nas requisições - Publico - JSON body example {
    "email": "teste@teste.com",
    "password": "123456789"
}

### Rotas Animal Pai
http://localhost:3000/father - GET - Resgata Todos os Animais Pai - Privado
http://localhost:3000/father/{id_animal} - GET - Resgata apenas Animal Pai - Privado
http://localhost:3000/father - POST - Cria um novo Animal Pai - Publico - JSON body Example {
    "name": "Pingo"
}
http://localhost:3000/father/{id_animal} - PATCH - Atualiza um animal pai - Privado - JSON body Example {
    "name": "Valente"
}
http://localhost:3000/father/{id_animal} - DELETE - Deleta um Animal pai - Privado
http://localhost:3000/father/children - GET - Resgata todos os animais e todos os seus filhos - Privado
http://localhost:3000/father/children/{id_animal} - GET - Resgata todos os filhos de um Pai - Privado

### Rotas Animal Filho
http://localhost:3000/child/ - GET - Resgata todos os animais filhos
http://localhost:3000/child/{id_animal} - GET - Resgata um animal filho
http://localhost:3000/child/ - POST - Cria um novo animal filho - JSON body example {
    "name": "Valente Junior",
    "father_id": 2
}
http://localhost:3000/child/{id_animal} - PATCH - Atualiza um animal filho - JSON body Example {
    "name": "Valente Junior 2",
    "father_id": 2
}
http://localhost:3000/child/{id_animal} - DELETE - Deleta um animal filho
```

## Stay in touch

- Author - [Jessé Satlei](https://github.com/JesseSatlei/)

## License

Nest is [MIT licensed](LICENSE).
