Olá! Aqui está um modelo de documentação para o projeto "checkin-ts" hospedado no GitHub:

#Checkin-ts
Um projeto de check-in simples construído em TypeScript.

Descrição
Este projeto fornece uma API para um sistema de check-in. O sistema permite que usuários façam check-in em eventos. Ele mantém um registro de usuários que fizeram check-in e fornece estatísticas sobre o número de check-ins para cada evento.

A API é construída em TypeScript usando o framework Express.js. Os dados são armazenados em um banco de dados MongoDB usando o ODM Mongoose.

Requisitos
Para executar o projeto, você precisa ter o seguinte instalado em seu sistema:

Node.js
NPM ou Yarn
MongoDB

Instalação
Clone o repositório para o seu sistema local:
``` bash ```
```bash
git clone https://github.com/caduzz/checkin-ts.git
Instale as dependências do projeto usando o gerenciador de pacotes de sua escolha:
```
bash
Copy code
cd checkin-ts
npm install
ou

bash
Copy code
cd checkin-ts
yarn
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
env
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost/checkin
Inicie o servidor usando um dos seguintes comandos:
bash
Copy code
npm run dev
ou

bash
Copy code
yarn dev
A API estará disponível em http://localhost:3000.
Uso
Fazer Check-in
Para fazer check-in em um evento, envie um POST para /checkin com os seguintes campos no corpo da requisição:

json
Copy code
{
  "eventId": "eventId",
  "name": "nome do usuário",
  "email": "email do usuário"
}
O campo eventId é obrigatório e deve ser uma string com o ID do evento. Os campos name e email são obrigatórios e devem ser strings com o nome e o email do usuário, respectivamente.

Obter Estatísticas de Check-in
Para obter as estatísticas de check-in de um evento, envie um GET para /event/:eventId/stats, onde :eventId é o ID do evento. A resposta será um objeto JSON com os seguintes campos:

json
Copy code
{
  "event": "ID do evento",
  "totalCheckins": "número total de check-ins",
  "users": [
    {
      "name": "nome do usuário",
      "email": "email do usuário"
    },
    ...
  ]
}
Listar Todos os Eventos
Para listar todos os eventos, envie um GET para /event. A resposta será um array JSON com todos os eventos armazenados no banco de dados.

Contribuindo
Este projeto é aberto para contribuições. Sinta-se à vontade para criar um fork do repositório e enviar pull requests com novos recursos ou correções de bugs.

Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
