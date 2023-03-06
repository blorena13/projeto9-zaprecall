import { useState } from "react";
import styled from "styled-components";
import Testando from "./Testando";

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


export default function FlashCards({icon, certo, erro, quase , setIcon}) {

    const [turn, setTurn] = useState([]);
    const [botaoClicado, setBotaoClicado] = useState(false);
    const [perguntaClicada, setPerguntaClicada] = useState(false);
    const [virarClicada, setVirarClicada] = useState(false);
    const [number, setNumber] = useState(0); //mudar nome da funçao

    


    function Teste(test) {


    }

    console.log(Teste)

    return (
        <>

            <Flashs> {card.map((item, index) => <Testando 
            index={index} 
            key={index} 
            question={item.question}
            answer={item.answer}
            icon = {icon}
            certo={certo}
            erro={erro}
            quase={quase}
            setIcon={setIcon}
            
            />
            )} 


            </Flashs>
        </>
    )


}



    

    const Flashs = styled.div`
    
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


    

    