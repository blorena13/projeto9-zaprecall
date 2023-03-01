import { useState } from "react";
import seta from "./assets/seta_play.png";
import virar from "./assets/seta_virar.png";
import styled from "styled-components";

const card = [
	{number: 1 , question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{number: 2 , question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{number: 3 , question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{number: 4 , question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{number: 5 , question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{number: 6 , question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{number: 7 ,  question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{number: 8 , question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]


export default function FlashCards(){

    const [clicouPergunta, setClicouPergunta] = useState();
    

    return (
        <>
        <Flashs> {card.map((item) => <CadaCard> <p>Pergunta { card.number } </p>
        <img  src={seta} /> </CadaCard>)} 

        <Pergunta> <p>{card.question}</p> <img src={virar} /> </Pergunta>

        <Resposta>
            <p> aaaAAAAAaaaaaaaaaAAAaaa</p> 
            <Opcoes>
            <Nao>Não <br></br> lembrei</Nao>
            <Quase>Quase não lembrei</Quase>
            <Lembrei>Zap!</Lembrei>
             </Opcoes>
        </Resposta>
        </Flashs>
        
        
        </>
    )
}

const Flashs = styled.div`
    background-color: greenyellow;
    margin-top: 51px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 70px;

    font-family: Recursive;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    font-style: normal;
    color: #333333;

    img {
    width: 20px;
    height: 23px;
    margin-right: 22px;
    }

    p {
    margin-left: 15px;
    }
`

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

const Pergunta = styled.div`
    background-color:#FFFFD4;
    width: 299px;
    height: 131px;

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

const Resposta = styled.div`
    background-color: #FFFFD4;
    width: 300px;
    height: 131px;

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

`