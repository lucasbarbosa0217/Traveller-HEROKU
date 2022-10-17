# Traveller-HEROKU
 
# Traveller

Traveller é um projeto acadêmico realizado pelos primeiro ano de Sistemas para Internet da FIAP
## APIs Utilizadas

### API TRAVELLER

Criamos uma API própia para o nosso projeto usando as tecnologias Node, Express e Postgresql. A hospedagem do banco de dados foi feita na Heroku. O Github do projeto pode ser encontrado [aqui](https://github.com/fabriciosw/Traveller)

Nesta api temos o controle de usuários e avaliações. A documentação swagger da api pode ser entrada [aqui]{https://traveller-node-api.herokuapp.com/docs}


### Open Weather Map
Escolhemos a API Open Weather Map, pois para um turista é de extrema relevância saber a temperatura do local que ele está indo, para que assim possa preparar sua mala e outras variáveis adequadamente

Por isso fizemos uma seção chamada "temperatura média dos próximos dias", que renderiza dinamicamente as  temperaturas médias dos próximos 8 dias. Com cores ajustadas automaticamente para ajudar da experiência do usuário

A implementação da API está localizada no arquivo [apiTemperatura.js](https://github.com/lucasbarbosa0217/Traveller-Heroku/blob/main/script/apiTemperatura.js). 

### TomTom 
Escolhemos a API Tomtom, pois gratuitamente ela retorna os hoteis próximos de suas coordenadas e outras informações relevantes.
No app ela cria uma lista de hoteís dinamicamente.

A implementação da API está localizada no arquivo [apiHoteis.js](https://github.com/lucasbarbosa0217/Traveller-Heroku/blob/main/script/apiHoteis.js). 
E também em [apiHotel.js](https://github.com/lucasbarbosa0217/Traveller-Heroku/blob/main/script/apiHotel.js). 

