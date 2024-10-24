import { LifeBar, LifeBarContainer, ManaBar, ManaBarContainer, VisualStatus } from "./style";

interface heroProps {
    heroMana: number;
    heroLife: number
}

export function Life({heroMana, heroLife}: heroProps) {
    return(
    <VisualStatus>
        <ManaBarContainer> 
            <ManaBar progress={heroMana}></ManaBar>
        </ManaBarContainer>
        <LifeBarContainer>
            <LifeBar progress={heroLife}></LifeBar>
        </LifeBarContainer>
    </VisualStatus>
    )
}