import { useState } from "react";
import styled from "styled-components";
import Perguntas from "./Perguntas";



export default function Testando({index, question , answer, icon , erro, certo, quase, setIcon}) {
    
    const [mostrarInicio, setMostrarInicio] = useState();
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    

    function virarPerguntar(){
        setMostrarPergunta(true);
    }

    return (
        <>
        {mostrarPergunta ? (<Perguntas index={index} question={question} answer={answer} erro={erro} certo={certo} quase={quase} setIcon={setIcon} mostrarPergunta={setMostrarPergunta} />) : (<CadaCard data-test="flashcard" key={index}  > 
            <p data-test="flashcard-text" >{`Pergunta ${index + 1}` }</p>
            <img data-test={icon === erro ? 'no-icon' : icon === certo ? 'zap-icon' : icon === quase ? 'partial-icon' : 'play-btn'} src={icon} 
                onClick={() => {
                    virarPerguntar();
                    
                }} />

                  </CadaCard>)
        }
        </>
    )
}

const CadaCard = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 65px;
    margin-bottom: 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    
    font-family: Recursive;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    font-style: normal;
    color: #333333;
`