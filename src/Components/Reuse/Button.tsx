import React from "react";
import styled from "styled-components"

export interface iBtn {
    w?: string;
    text?: string;
    h?: string;
}

const Button: React.FC<iBtn> = ({w, text, h})=>{
    return (
        <div>
            <Container w={`${w}`} h={`${h}`}>{text}</Container>
        </div>
    )
}

export default Button;

const Container = styled.div<{w: string, h: string}>`
width: ${({w})=> w};
background-color: rgb(245,105,98);
height: ${({h})=>h};
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 18px;
border-radius: 5px;
cursor: pointer;
color: white;

:hover{
    transform: 3px;
}
`