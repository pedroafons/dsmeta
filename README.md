# Semana Spring React

## Preparação para a Semana Spring React

Na primeira etapa de preparação, preparei um layout completo utilizando HTML e CSS para o projeto.

Algumas das tags dessa nessa etapa:

- Tags semânticas: forma de deixar o site com suas informações bem explicadas e
 compreensíveis para o computador, ajudando até mesmo em sua busca no Google e
 facilitando o entendimento de leitores de acessibilidade. Por exemplo: `<header>` e `<section>`.
- Tags que representam dados em duas ou mais dimensões (utilizadas para as tabelas do projeto): `<table>`, `<thead>` (definem os títulos ou “cabeças” das colunas da tabela), `<tbody>` (encapsula um conjunto de linhas da tabela ( elementos), indicando que elas compõem o corpo da tabela),  `<tr>` (define uma linha de células em uma tabela), `<td>` (define uma célula de uma tabela que contém dados).

---

## Episódio 1

Aqui começamos de fato a introduzir os frameworks e bibliotecas na aplicação. Criando os projetos back end e front end; utilizando o Git e Github para um monorepo e montando o visual estático do front end.

Com o ReactJS e TypeScript foi construída todo o visual estático do projeto importando e relacionando vários componentes do design feito no figma e codificado na etapa de preparação.

---

[Banco de dados - conceitual vs. relacional (exercício ‘biblioteca’)](https://www.notion.so/Banco-de-dados-conceitual-vs-relacional-exerc-cio-biblioteca-742fb8cc3f9f47aaaffdb6a00c461c13)

---

## Episódio 2

Depois da aula sobre banco de dados iniciamos a implementar o back end. Começando pelas configurações de segurança importadas do próprio framework Spring.

Na parte do banco de dados foi criada a entidade *Sale,* com as informações de cada dado das linhas da tabela, para representar as vendas. Também com Getters e Setters para os dados serem acessados por meio de outras classes.

Para que o mapeamento dos dados que são representados em formas de tabela seja para um dado representado na orientação à objetos foi necessário fazer o mapeamento objeto-relacional (JPA - API padrão da linguagem Java que descreve uma interface comum para frameworks de persistência de dados. A JPA define um meio de mapeamento objeto-relacional para objetos Java simples e comuns, denominados beans de entidade).

Foi apresentado os *Annotations* do Spring, que são metadados que fornecem dados sobre um programa. Por exemplo o @Entities que prepara o código para que a classe que ele foi inserido perto seja equivalente a uma tabela do banco de dados.

Também foi configuradas as configurações do banco de dados H2 e fazendo a *seed* desse banco.

---

Aqui foi feito o primeiro teste de endpoint (caminho) da API REST (serve para a comunicação entre aplicações para estabelecer o consumo de informações de forma rápida e segura. É utilizada para estruturar qualquer modelo de aplicações web para os dias atuais, onde temos um alto volume de trocas de dados sendo processados de forma assíncrona entre diversas aplicações.) utilizando o padrão de 3 camadas: ***Controller*** (controlador) ***→ Service*** (componente responsável por fazer operações de negócio) ***→ Repository*** (um componente(objeto) responsável por acessar o banco de dados). 

---

Depois foi implantado o Twilio para o envio de SMS. Configuramos as dependências, variáveis de ambiente e a classe para o envio.

---

De forma bem sucinta implantamos a aplicação no Heroku (núvem).

---

## Episódio 3

Essa parte do evento foi para integrar o back end e front end e implantar o front end. Foi utilizado o Axios para realizar as requisições HTTP e o useEffect do React para programar de uma forma atrelada ao ciclo de vida do componente, serve para executar alguma coisa quando o componente é montado na primeira vez e também ele executa isso quando algum dado informado for alterado.

---

Logo isso foi feita a listagem de venda criando um padrão por coalescência; passamos as datas como argumento; por meio de *Props* as notificações foram enviadas e por meio do *Toastfy* do react a mensagem de confirmação aparece na tela.

---

Por último o *deploy* foi feito pelo Netlify.

---

## Notas finais

No curto período de uma semana tive um grande aprendizado, conheci novas tecnologias e novas funções e métodos para as que eu já conhecia e venho estudando há um tempo.

Gratidão ao mestre [Nélio Alves](https://devsuperior.com.br/) pelo treinamento e pelas valiosas dicas.

Link da aplicação: [https://notifythere.netlify.app/](https://notifythere.netlify.app/)
