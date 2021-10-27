# Diwe

## Objetivo
Esse projeto tem como objetivo construir uma Api Rest para o Cadastro de Pets.

## Ferramentas que precisam ser Instaladas para Utilização
* NodeJS
* Npm ou Yarn
* Nest Globalmente
* Docker

## Guia de Instalação

O NodeJs pode ser instalado baixando o instalador no site oficial:
* https://nodejs.org/en/ - Opte pela versão LTS

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

# Será baixado uma imagem usada para teste do Docker que retornará um Hello World.
$ sudo docker run hello-world

# Por meio desse comando seu usuario será colocado no grupo do docker, assim que finalizado o comando será necessário reiniciar a maquina
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

Obs: Não se esqueça de criar o seu .env

## Rotas e Dados

Para que acesse as rotas privadas, será necessário adicionar em sua requisição um "Bearer Token" gerado pela rota de autentificação.

Então para a utilização, crie um novo usuario e depois realize a autentificação.

### Rotas Usuario

| Rota                                                 | Tipo da Rota | Detalhes                  | Tipo    | JSON Example                                             | Parametro Url |
| ------                                               |      -       |     -                     |  -      |   -                                                      | -             |
| http://localhost:3000/users/                         | GET          | Resgata todos os usuarios | Privado |  Sem Json                                                | Sem parametro |
| http://localhost:3000/users/{id_usuario}             | GET          | Resgata um usuario        | Privado |  Sem Json                                                | Id do Usuario |
| http://localhost:3000/users/                         | POST         | Cria um novo usuario      | Publico |  { "email": "teste@teste.com", "password": "123456789" } | Sem parametro |
| http://localhost:3000/users/{id_usuario}             | PATCH        | Atualiza um usuario       | Privado |  { "email": "teste@teste.com", "password": "123456" }    | Id do Usuario |
| http://localhost:3000/users/{id_usuario}             | DELETE       | Deleta um usuario         | Privado |  Sem Json                                                | Id do Usuario |

### Rotas de Autentificação
| Rota                                                 | Tipo da Rota  | Detalhes                      | Tipo    | JSON Example                                             | Parametro Url |
| ------                                               |      -        |     -                         |  -      |   -                                                      | -             |
| http://localhost:3000/auth/login                     | POST          | Gera token de Autentificação  | Publico |  { "email": "teste@teste.com", "password": "123456789" } | Sem parametro |

### Rotas Animal Pai
| Rota                                                      | Tipo da Rota | Detalhes                                        | Tipo    | JSON Example           | Parametro Url |
| ------                                                    |      -       |     -                                           |  -      |   -                    | -             |
| http://localhost:3000/father                              | GET          | Resgata todos os animais pais                   | Privado |  Sem Json              | Sem parametro |
| http://localhost:3000/father/{id_animal_pai}              | GET          | Resgata um animal pai                           | Privado |  Sem Json              | Id do Animal  |
| http://localhost:3000/father/children                     | GET          | Restaga todos os animais e todos os seus filhos | Privado |  Sem Json              | Sem parametro |
| http://localhost:3000/father/children/{id_animal_pai}     | GET          | Resgata todos os filhos de um pai               | Privado |  Sem Json              | Id do Animal  |
| http://localhost:3000/father                              | POST         | Cria um novo animal pai                         | Publico |  { "name": "pingo" }   | Sem parametro |
| http://localhost:3000/father/{id_animal_pai}              | PATCH        | Atualiza um animal pai                          | Privado |  { "name": "valente" } | Id do Animal  |
| http://localhost:3000/father/{id_animal_pai}              | DELETE       | Deleta um animal pai e seus filhos              | Privado |  Sem Json              | Id do Animal  |

### Rotas Animal Filho

| Rota                                                       | Tipo da Rota | Detalhes                        | Tipo    | JSON Example                           | Parametro Url |
| ------                                                     |      -       |     -                           |  -      |   -                                    | -             |
| http://localhost:3000/child                                | GET          | Resgata todos os animais filhos | Privado |  Sem Json                              | Sem parametro |
| http://localhost:3000/child/{id_animal_filho}              | GET          | Resgata um animal filho         | Privado |  Sem Json                              | Id do Animal  |
| http://localhost:3000/child                                | POST         | Cria um novo animal filho       | Privado |  { "name": "pingo", "father_id": 2 }   | Sem parametro |
| http://localhost:3000/child/{id_animal_filho}              | PATCH        | Atualiza um animal filho        | Privado |  { "name": "valente", "father_id": 2 } | Id do Animal  |
| http://localhost:3000/child/{id_animal_filho}              | DELETE       | Deleta um animal filho          | Privado |  Sem Json                              | Id do Animal  |

### Tarefas utilizadas para criação do Projeto
* Deverá existir um relacionamento entre Pais e Filhos. (1:N)
* Deverá existir validação das informações antes da gravação.
* Cadastro de Pais
* Cadastro de Filhos
* Ver todos os Pais e filhos
* Ver todos os filhos de um determinado pai
* Editar os dados de um pai
* Editar os dados de um filho
* Excluir um Pai e seus filhos (cascata)
* As rotas de cadastro de pais deverão ser uma rota pública.
* As rotas de edição e exclusão deverão ser rotas restritas protegidas por autenticação via JWT
* A rota de cadastro de filhos deverá ser uma rota protegida por JWT
## Contato

* Autor - [Jessé Satlei](https://github.com/JesseSatlei/)

## Licença

* Licença do Nest Js [MIT licensed](LICENSE).