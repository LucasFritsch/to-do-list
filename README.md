# To-do List
Aplicação para gerenciamento de tarefas desenvolvida com HTML, CSS e JavaScript.

## Funcionalidades:
- Inclusão de novas tarefas
- Marcar tarefas específicas como conluídas
- Apagar lista de tarefas
- Marcar todas as tarefas como concluídas

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript

## Objetivo do projeto
Esse projeto teve por objetivo servir como prática ao uso de Javascript como linguagem web para desenvolvimento de aplicações interativas, 
principalmente por meio do uso de functions, callbacks, eventListeners, NodeLists e métodos e atributos de objetos do DOM, para reforçar e 
consolidar o aprendizado de conceitos elementares da linguagem.

## Melhorias futuras
- Refatoração do código para melhor compartimentalização de funções
- Funcionalidade: drag and drop
- Animações e transições suaves
- Funcionalidade: exclusão de tarefa única
- Dados persistentes com LocalStorage

## Melhorias futuras: comentários
- Cada task possui um listener individual, pretendo refatorar no futuro utilizando event delegation ou outro padrão que permita melhor
escalabilidade do código.
- Novas tasks são criadas com uso de "insertAdjacentHTML". Provavelmente não é a melhor escolha, e pretendo estudar meios melhores de incluir
as tasks na página.
- Certas regras de mudança de visual, como as utilizadas para alterar o estado das tasks, usam lógica repetitiva em muitas funções. Essa lógica
pode ser reduzida para melhorar manutenção do código.
- A lógica de estado das tasks (marcada ou não marcada) depende de manipulação direta de classes do DOM. Pretendo aprender formar de melhorar
essa lógica de forma independente do DOM.

## Live Preview
Veja o projeto no ar em https://lucasfritsch.github.io/to-do-list
