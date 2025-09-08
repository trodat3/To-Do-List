interface ItemTarefaProps {
  tarefa: {
    id: string;
    nome: string;
    concluida: boolean;
  };
  onToggleConcluida: (id: string) => void;
}

function ItemTarefa({ tarefa, onToggleConcluida }: ItemTarefaProps) {
  return (
    <div
      onClick={() => onToggleConcluida(tarefa.id)}
      className={`p-2 border cursor-pointer ${tarefa.concluida ? 'line-through' : ''}`}
    >
      {tarefa.nome}
    </div>
  );
}

export default ItemTarefa;
