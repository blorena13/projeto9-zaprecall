import styled from "styled-components";

export default function Concluidos(){
    return (
        <>
        <Concluido> 0/4 CONCLUÍDOS </Concluido>
        </>
    )
}

const Concluido = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    font-family: 'Recursive';
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    color: #333333;
`