import { useState } from "react";
import styled from "styled-components";
import Inicio from "./Inicio";





export default function FlashCards({card, contador, setcontador}) {

    
    return (
        <>

            <Flashs> {card.map((item, index) => <Inicio 
            index={index} 
            key={index} 
            question={item.question}
            answer={item.answer}
            contador={contador}
            setcontador={setcontador}
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


    

    