import { useState } from "react";
import { Footer } from "./components/Footer";
import { Start } from "./Pages/start";
import { Life } from "./components/life";
import { AppContainer } from "./styles/GlobalStyles";

interface StatusProps {
  hp: number;
  mp: number;
  strength: number;
  defense: number;
  intelligence: number;
  agility: number;
  luck: number;
  endurance: number;
}

export function App() {

  const [mana, setMana] = useState(100)
  const [heroLife, setHeroLife] = useState(100)

  const [diceValue, setDiceValue] = useState(0)

  const [status, setStatus] = useState<StatusProps>({
    hp: 100,
    mp: 50,
    strength: 3,
    defense: 4,
    intelligence: 3,
    agility: 5,
    luck: 5,
    endurance: 4,
});

  function valueDice(value: number) {
    setDiceValue(value)
  }

  return (
    <AppContainer>
      <Start 
        status={status}
        diceValue={diceValue}
        heroLife={heroLife}
        mana={mana}
        setHeroLife={setHeroLife}
        setMana={setMana}
      />
      <Life heroLife={heroLife} heroMana={mana}/>
      <Footer 
        status={status} 
        setStatus={setStatus}
        onDiceValueChange={valueDice} 
      />
    </AppContainer>
  )
}


