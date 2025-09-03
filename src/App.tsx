import { useState } from 'react';
import './App.css';

function App() {
  const[inputNomeTarefa, setValorNomeTarefa] = useState("");

  function handleCriar(){
    if (inputNomeTarefa){
        setValorNomeTarefa(inputNomeTarefa);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center font-sans'>
      <h1>ToDo List</h1>
      
      <div>
        <input 
          type="text" 
          placeholder="Ei, digite aqui sua tarefa" 
          value={inputNomeTarefa}
          onChange={(evento) => setValorNomeTarefa(evento.target.value)}
          className="input-tarefa"
        />
        
        <button onClick={handleCriar} style={{ padding: '8px' }}>
          Criar
        </button>
      </div>
      </div>

  );
}

export default App
