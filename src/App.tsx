import { useState } from 'react';
import './App.css';
import ItemTarefa from './components/ItemTarefa.tsx';

interface Tarefa {
  id: string,
  nome: string,
  concluida: boolean
}

function App() {
  const [inputNomeTarefa, setValorNomeTarefa] = useState("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const handleCriar = () => {
    if (inputNomeTarefa.trim() !== '') {
      const novaTarefa: Tarefa = {
        id: Math.random().toString(),
        nome: inputNomeTarefa,
        concluida: false,
      };
      setTarefas([...tarefas, novaTarefa]);
      setValorNomeTarefa('');
    }
  };

  const handleConcluir = (id: string) => {
    setTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Lista de Tarefas</h1>

        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Digite aqui a sua tarefa"
            value={inputNomeTarefa}
            onChange={(evento) => setValorNomeTarefa(evento.target.value)}
            className="border p-2"
          />

          <button
            onClick={handleCriar}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Adicionar Tarefa
          </button>
        </div>

        <div className="space-y-2">
          {tarefas.map(tarefa => (
            <ItemTarefa 
              key={tarefa.id} 
              tarefa={tarefa} 
              onToggleConcluida={handleConcluir} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;