import {useState} from "react"
//import Cards from "./Cards";
import Flashcards from "./Flashcards";
import Concluidos from "./Concluidos";
import raio from "./assets/logo.png";
import styled from "styled-components";
import seta from "./assets/seta_play.png";
import erro from "./assets/icone_erro.png";
import certo from "./assets/icone_certo.png";
import quase from "./assets/icone_quase.png";

function App() {
 const [icon, setIcon] = useState(seta);

  return (
    <>
    <Principal>
      <Logo>
        <img src={raio} />
        <p> ZapRecall </p>
        </Logo>
      
      <Flashcards icon={icon} erro={erro} certo={certo} quase={quase} setIcon={setIcon}/>
      <Concluidos />
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