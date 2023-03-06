import styled from "styled-components";
import {useState} from "react";

export default function Respostas(
    {answer, 
        erro, 
        certo, 
        quase , 
        mostrarResposta,
        mostrarPergunta,
        setIcon,
    }){
        

        function voltar(){
            mostrarResposta(false);
            mostrarPergunta(false); 
        }

    return(
        <>
        <Resposta  >
                        <p data-test="flashcard-text"> {answer}</p>
                        <Opcoes>
                            <Nao data-test="no-btn" onClick={() => {voltar(); setIcon(erro)}}>Não <br></br> lembrei</Nao>
                            <Quase data-test="partial-btn" onClick={() => { voltar(); setIcon(quase)}}>Quase não lembrei</Quase>
                            <Lembrei data-test="zap-btn" onClick={() => {voltar(); setIcon(certo)}}>Zap!</Lembrei>
                        </Opcoes>
                    </Resposta>
        </>
    )
}

const Resposta = styled.div`
    background-color: #FFFFD4;
    width: 300px;
    height: 131px;
    margin-bottom: 25px;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        margin-top: 18px;
    }

`

    const Opcoes = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;

`

    const Nao = styled.div`
    background-color: #FF3030;
    width: 85.17px;
    height: 37.17px;

    border-radius: 5px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 7.74px;
    cursor: pointer;
`

    const Quase = styled.div`
    background-color: #FF922E;
    width: 85.17px;
    height: 37.17px;

    border-radius: 5px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 7.74px;
    cursor: pointer;
`

    const Lembrei = styled.div`
   background-color: #2FBE34;
    width: 85.17px;
    height: 37.17px;

    border-radius: 5px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`