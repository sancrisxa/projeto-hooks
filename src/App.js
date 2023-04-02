// Hooks
import { useState } from 'react';

// Importando o css
import './App.css';

// Importando o componente Formulario
import Formulario from './Formulario';

// Importando o componente Tabela
import Tabela from './Tabela';

// Componente
function App() {

  // useState
  const[indiceVetor, setIndiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  // Funcao para castrar
  const cadastrar = () => {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade,
    }

    setNome('');
    setIdade('');
    setCidade('');
    

    setVetor([...vetor, obj]);


  }

  const selecionar = (indice) => {
    setIndiceVetor(indice);
    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false);
  }

  // Funcao para alterar os dados
  const alterar = () => {
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade,   
    }

    let copiaVetor = [...vetor];

    copiaVetor[indiceVetor] = obj;

    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  // Funcao para remover
  const remover = () => {
    let copiaVetor = [...vetor];

    copiaVetor.splice(indiceVetor, 1);

    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');

    setBtnCadastrar(true);
  }

  // Funcao para cancelar a edicao ou remocao
  const cancelar = () => {
    setNome('');
    setIdade('');
    setCidade('');

    setBtnCadastrar(true);
  }

 // Retorno 
  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar} alterar={alterar} remover={remover} cancelar={cancelar} nome={nome} idade={idade} cidade={cidade} />
      <Tabela vetor={vetor} selecionar={selecionar} />
    </div>
  );

}

// Exportando o componente
export default App;
