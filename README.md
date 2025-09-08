Projeto de ToDo List com React e TypeScript
Sobre o Projeto
Este projeto é a execução de uma atividade avaliativa da disciplina de Desenvolvimento Web. O objetivo dele é criar uma ToDo List com funcionalidades específicas: Adicionar tarefa, listar tarefas e concluir tarefa. O projeto também foi estilizado usando a biblioteca Tailwind, para garantir mais praticidade.

Tecnologias Utilizadas
Para elaborar isso, usei:

React: É a base para criar a tela.

TypeScript: Para me dar mais segurança no código.

Vite: Ferramenta que ajuda o projeto a carregar mais rápido.

Tailwind CSS: Para ajeitar o visual e deixar o design responsivo.

Estrutura de Componentes
O aplicativo é dividido em duas partes:

App.tsx: Este é o componente "principal" da aplicação. Ele controla a lista inteira, a caixinha de texto e os botões.

ItemTarefa.tsx: Este é um código que faz só uma coisa: mostrar uma tarefa. Ele recebe as informações da tarefa do App.tsx (via props) e já sabe o que fazer.

Gerenciamento de Estado (useState)
Para a página atualizar, mais especificamente a lista de tarefas, usei o useState do React. Ele é o que permite:

Salvar o que a pessoa digita na caixinha de texto, usando o estado inputNomeTarefa:

const [inputNomeTarefa, setValorNomeTarefa] = useState("");

Guardar a lista de tarefas, usando o estado tarefas, para que a tela mude sozinha quando você adiciona uma tarefa nova ou clica para concluir uma:

const [tarefas, setTarefas] = useState<Tarefa[]>([]);

Tipagem com TypeScript
O TypeScript me ajudou a criar a interface Tarefa, que é basicamente o contrato para cada tarefa. Nela, eu defini que a tarefa tem um ID (string), um nome (string) e um status de "concluída" (booleano). Isso evita alguns erros e faz o projeto seguir um padrão desde o início.

interface Tarefa {
  id: string,
  nome: string,
  concluida: boolean
}
