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
`
export const Imagen = styled.img`
    width: 100%;
    height: 100%;
`

export const LifeEnemyBarContainer = styled.div`
    max-width: 70%;
    height: 5%;
    border: 2px solid ${props => props.theme.colors["gray-700"]};
    border-radius: 9999px;
    margin: auto;
    background-color: transparent;
    overflow: hidden;
`

export const LifeEnemyBar = styled.div<ProgressBarProps>`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${props => props.theme.colors.red};
`

export const EnemyImg = styled.img`
    width: 80vw;
    padding: 10%;
`

