import styled from "styled-components";
import { useState } from "react";
import virar from "./assets/seta_virar.png";
import Respostas from "./Respostas";

export default function Perguntas({
    index, 
    question, 
    answer,
    erro,
    certo,
    quase,
    setIcon,
    mostrarPergunta,
    seta,
}) 
{
    const [mostrarResposta, setMostrarResposta] = useState(false);

    function virarResposta(){
        setMostrarResposta(true);
    }
 
        return (
    <>
    {mostrarResposta ? <Respostas erro={erro} certo={certo} quase={quase} answer={answer} setIcon={setIcon} mostrarPergunta={mostrarPergunta} mostrarResposta={setMostrarResposta} /> : <Pergunta  > 
        <p data-test="flashcard-text">{question}</p> <img data-test="turn-btn" src={virar} 
                    onClick={() => {
                        virarResposta();
                    }} /> 
                    </Pergunta>
}
    </>
 )
}


const Pergunta = styled.div`
    background-color:#FFFFD4;
    width: 299px;
    height: 131px;
    margin-bottom: 25px;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: flex;
    justify-content: space-between;

    img {
    width: 30px;
    height: 20px;
    color:#333333;

    margin-right: 15px;
    margin-top: 105px;
    }

    p {
        margin-top: 18px;
    }
    
`

  