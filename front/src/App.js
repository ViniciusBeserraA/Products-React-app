import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './tabela';

function App() {

//Objeto produto
const produto = {
  id: 0,
  name: '',
  mark: ''
} 

//UseState
 const [btnCadastrar, setBtnCadastrar] = useState(true)
 const [produtos, setProdutos] = useState([]);
 const [objProduto, setObjProduto] = useState(produto);

//UseEffect
useEffect(()=>{
fetch("http://localhost:8080/listar")
.then(response => response.json())
.then(res => setProdutos(res));
}, []);

//Obtendo os dados do formulário
const onWritting = (e) => {
  setObjProduto({...objProduto, [e.target.name]:e.target.value})
} 

//Cadastrar Produto
const cadastrar = () =>{
  fetch("http://localhost:8080/cadastrar", {
    method: 'post',
    body: JSON.stringify(objProduto),
    headers: {
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(response => response.json())
  .then(res => {
    if(res.message !== undefined){
      alert(res.message);
    }else{
      setProdutos([...produtos, res]);
      alert('Cadastro Efetuado com Sucesso!')
      limparFomulario();
    }
  })
}

//Alterar Produto
const alterar = () =>{
  fetch("http://localhost:8080/alterar", {
    method: 'put',
    body: JSON.stringify(objProduto),
    headers: {
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(response => response.json())
  .then(res => { 
    if(res.message !== undefined){
      alert(res.message);
    }else{
      alert('Alteração Efetuada com Sucesso!')
      //Cópia vetor de produtos
      let vetorTemp = [...produtos];
      
      // Índice
      let indice = vetorTemp.findIndex((p)=>{
        return p.codigo === objProduto.cod;
      });
      
      //Alterar produto do vetorTEmp
      vetorTemp[indice] = objProduto;
    
      //Atualziar o vetor de produtos
      setProdutos(vetorTemp);
      
      //limpar formulario
      limparFomulario();
    }
  })
}

//Remover Produto
const remover = () =>{
  fetch("http://localhost:8080/remover/"+objProduto.id, {
    method: 'delete',
    headers: {
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(response => response.json())
  .then(res => {
    //mensagem
    alert(res.message)
    
    //Cópia vetor de produtos
    let vetorTemp = [...produtos];
    
    // Índice
    let indice = vetorTemp.findIndex((p)=>{
      return p.codigo === objProduto.cod;
    });
    
    //Remover produto do vetorTEmp
    vetorTemp.splice(indice, 1);
   
    //Atualziar o vetor de produtos
    setProdutos(vetorTemp);
    
    //limpar formulario
    limparFomulario();
  })
}

const limparFomulario = () =>{
setObjProduto(produto);
setBtnCadastrar(true);
}

const selecionarProduto = (indice) => {
  setObjProduto(produtos[indice]);
  setBtnCadastrar(false);
}

  return (
    <div>
      <Formulario botao={btnCadastrar} eventKeyboard={onWritting} cadastrar={cadastrar} obj={objProduto} cancelar={limparFomulario} remover={remover} alterar={alterar} />
      <Tabela vetor={produtos} selecionar={selecionarProduto}/>
    </div>
  );
}

export default App;
