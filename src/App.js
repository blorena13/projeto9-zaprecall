import {useState} from "react"
//import Cards from "./Cards";
import Flashcards from "./Flashcards";
import Concluidos from "./Concluidos";
import raio from "./assets/logo.png";
import styled from "styled-components";


function App() {

  const card = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

let contador = 0;


  return (
    <>
    <Principal>
      <Logo>
        <img src={raio} />
        <p> ZapRecall </p>
        </Logo>
      
      <Flashcards card={card} contador={contador}/>
      <Concluidos card={card} contador={contador}/>
      </Principal>
    </>
  );
}

export default App;

const Principal = styled.div`
    width: 375px;
    background-color: #FB6B6B;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`

    display: flex;
    margin-top: 48px;
    width: 100%;
    justify-content: center;
    margin-bottom: 51px;

  img {
    width: 52px;
    height: 60px;
  }  

  p {
    width: 203.17px;
    
    font-family: 'Righteous';
    font-size: 36px;
    font-weight: 400;
    line-height: 44.7px;
    color: #FFFFFF;

    align-items: center;
    display: flex;
    justify-content: center;
  }
`