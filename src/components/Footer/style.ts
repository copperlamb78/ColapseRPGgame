import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 30vh;
    background-color: ${props => props.theme.colors["gray-700"]};
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 1.8rem;
        width: 40%;

    }

`

export const StatusButton = styled.button`
    border: 0;
    border-radius: 9999px;
    background-color: ${props => props.theme.colors["brown-400"]};
    color: ${props => props.theme.colors["black"]};
    height: 1rem;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${props => props.theme.colors["brown-100"]};

    }
`

export const List = styled.ul`
    list-style: none;

    li {
        text-align: justify;
        display: flex;
        flex-direction: row;
        gap: 1vw;
        align-items: center;
        font-size: 1rem;
    }
`

export const Buttons = styled.button`
    border: 0;
    border-radius: 1rem;
    background-color: ${props => props.theme.colors["brown-400"]};
    font-size: 1.3rem;
    transition: background-color 0.2s, font-size 0.2s;

    &:hover {
        font-size: 1.5rem;
        background-color: ${props => props.theme.colors["brown-100"]};
    }

`

export const DiceContainer = styled.div<{ isRolling: boolean }>`
  background-color: ${props => props.theme.colors["gray-300"]};
  border-radius: 1vw;
  display: flex;
  height: 20vw;
  max-width: 20vw;
  position: absolute;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: 30%;
  left: 62%;

  transition: background-color 0.2s ease;
  border: 1px solid ${props => props.theme.colors.black};

  &:hover {
    background-color: ${props => props.theme.colors["gray-100"]}
  }

  h1 {
    font-size: 2rem;
  }

  ${(props) => props.isRolling && rollAnimation}


`

export const FightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const rolling = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const rollAnimation = css`
    animation: ${rolling} 1s infinite
`




