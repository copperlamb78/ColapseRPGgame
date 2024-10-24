import styled from "styled-components"

interface ProgressBarProps {
    progress: number;
}

export const VisualStatus = styled.div`
    width: 100vw;
    height: 5dvh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60%;

    @media(max-width: 375px){
        padding-bottom: 50%;
    }

    @media(max-width: 426px){
        padding-bottom: 10%;
    }
    @media (min-width: 426px) and (max-width: 768px){
        padding-bottom: 0;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-bottom: 0;
    }
    @media (min-width: 1024px) {
        padding: 0;
    }
`

export const ManaBarContainer = styled.div`
    width: 30%;
    height: 30%;
    border: 2px solid ${props => props.theme.colors["gray-700"]};
    border-radius: 9999px;
    margin: auto;
    background-color: transparent;
    overflow: hidden;
`

export const ManaBar = styled.div<ProgressBarProps>`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${props => props.theme.colors["blue-700"]};
`

export const LifeBarContainer = styled.div`
    width: 50%;
    height: 30%;
    border: 2px solid ${props => props.theme.colors["gray-700"]};
    border-radius: 9999px;
    margin: auto;
    background-color: transparent;
    overflow: hidden;
`

export const LifeBar = styled.div<ProgressBarProps>`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${props => props.theme.colors.green};
`