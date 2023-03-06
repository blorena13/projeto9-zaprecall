import {useState} from "react"
//import Cards from "./Cards";
import Flashcards from "./Flashcards";
import Concluidos from "./Concluidos";
import raio from "./assets/logo.png";
import styled from "styled-components";


function App() {

  const card = [
    { question: "Qual o nome completo de Taylor Swift?", answer: "Taylor Alison Swift" },
    { question: "Qual dia é o aniversário da Taylor Swift?", answer: "13/12" },
    { question: "Que o signo da Taylor Swift?", answer: "Sagitário" },
    { question: "Qual a música da Taylor Swift foi feita para o Harry Styles?", answer: "Style" },
    { question: "Que cantora brasileira Taylor Swift fez um feat?", answer: "Paula Fernandes" },
    { question: "Qual o nome das gatas de estimação de Taylor Swift?", answer: "Meredith e Olívia" },
    { question: "Qual o número da sorte de Taylor Swift?", answer: "13" },
    { question: "Qual o nome do último álbum lançado pela Taylor Swift?", answer: "Midnights" }
]

const [contador, setContador] = useState(0)


  return (
    <>
    <Principal>
      <Logo>
        <img src={raio} />
        <p> ZapRecall </p>
        </Logo>
      
      <Flashcards card={card} contador={contador} setcontador={setContador}/>
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