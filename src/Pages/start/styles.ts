import styled from "styled-components";

interface ProgressBarProps {
    progress: number;
}

export const Container = styled.div`
    max-width: 100vw;
    height: 65dvh;
    

    h1 {
        font-size: 2rem;
        text-align: center;
        font-family: "Jacquard 12", serif;
    }

    h2 {
        font-size: 1rem;
        text-align: center;
    }

    @media (min-width: 560px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`
export const Imagen = styled.img`
    width: 100%;
    height: 100%;

    
`

export const LifeEnemyBarContainer = styled.div`
    width: 70%;
    height: 5%;
    border: 2px solid ${props => props.theme.colors["gray-700"]};
    border-radius: 9999px;
    margin: auto;
    background-color: transparent;
    overflow: hidden;
    @media (min-width: 560px) and (max-width: 820px) {
        width: 70%;
        height: 4vh;
        margin: 0;
    }
    @media (min-width: 821px) {
        width: 70%;
        padding: 0;
        margin: 0;
    }
`

export const LifeEnemyBar = styled.div<ProgressBarProps>`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${props => props.theme.colors.red};
`

export const EnemyImg = styled.img`
    width: 80vw;
    padding: 10%;
    
    @media (min-width: 560px) and (max-width: 768px) {
        width: 60vw;
        padding: 0;
        padding-top: 5%;
    }
    @media (min-width: 768px) and (max-width: 820px) {
        width: 55vw;
        padding: 0;
        padding-top: 5%;
    }
    @media (min-width: 821px) and (max-width: 1024px) {
        width: 40vw;
        padding: 0;
        padding-top: 5%;
    }
    @media(min-width: 1024px) {
        width: 45vw;
        padding: 0;
    }
`

