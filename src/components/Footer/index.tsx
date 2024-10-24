import { useState } from "react";
import { Buttons, Container, DiceContainer, List, StatusButton } from "./style";
import { Plus } from "phosphor-react";

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

  interface FooterProps {
    status: StatusProps;
    setStatus: (newStatus: StatusProps) => void;
    onDiceValueChange : (value: number) => void;
  }

export function Footer({status, setStatus, onDiceValueChange }: FooterProps) {

    const [rollValue, setRollValue] = useState(0)
    const [isRolling, setIsRolling] = useState(false)
    const [canClick, setCanClick] = useState(true)

    function rollDice() {
        if (canClick) {
            setIsRolling(true)
            setCanClick(false)
            setTimeout(() => {
                const newRoll = Math.floor(Math.random() * 20) + 1
                setRollValue(newRoll)
                setIsRolling(false)
                setCanClick(true)
                onDiceValueChange(newRoll)
            }, 1000)
        }
        
    }

    const [showStatus, setShowStatus] = useState(false)
    const [showBag, setShowBag] = useState(false)
    const [showFight, setShowFight] = useState(false)


        
    const handleStatusChange = (stat:keyof StatusProps, value:number) => {
        setStatus({
            ...status,
            [stat]: status[stat] + value,
        })
    }

    const toggleStatus = () => {
        setShowStatus(true)
        setShowBag(false)
        setShowFight(false)
    }
    
    const toggleBag = () => {
        setShowStatus(false)
        setShowBag(true)
        setShowFight(false)
    }

    const toggleFight = () => {
        setShowStatus(false)
        setShowBag(false)
        setShowFight(true)
    }

    return (
        <Container>
            <div>
                <Buttons onClick={toggleFight}>Fight</Buttons>
                <Buttons onClick={toggleBag}>Bag</Buttons>
                <Buttons onClick={toggleStatus}>Status</Buttons>
            </div>
            <div>
                {showStatus &&(
                    <List>
                        <li><StatusButton onClick={() => handleStatusChange('hp', 10)}><Plus size={'5vw'}/></StatusButton> HP: {status.hp}</li>
                        <li><StatusButton onClick={() => handleStatusChange('mp', 5)}><Plus size={'5vw'}/></StatusButton> MP: {status.mp}</li>
                        <li><StatusButton onClick={() => handleStatusChange('strength', 1)}><Plus size={'5vw'}/></StatusButton> STR: {status.strength}</li>
                        <li><StatusButton onClick={() => handleStatusChange('defense', 1)}><Plus size={'5vw'}/></StatusButton> DEF: {status.defense}</li>
                        <li><StatusButton onClick={() => handleStatusChange('intelligence', 1)}><Plus size={'5vw'}/></StatusButton> INT: {status.intelligence}</li>
                        <li><StatusButton onClick={() => handleStatusChange('agility', 1)}><Plus size={'5vw'}/></StatusButton> AGI: {status.agility}</li>
                        <li><StatusButton onClick={() => handleStatusChange('luck', 1)}><Plus size={'5vw'}/></StatusButton> LUK: {status.luck}</li>
                        <li><StatusButton onClick={() => handleStatusChange('endurance', 1)}><Plus size={'5vw'}/></StatusButton> END: {status.endurance}</li>
                    </List>
                )}
                {showBag &&(
                   <h1>Olha sua bag aqui</h1> 
                )}
                {showFight &&(
                    <DiceContainer isRolling={isRolling} onClick={rollDice}>
                    <h1>{rollValue}</h1>
                    </DiceContainer>
                )}
            </div>
        </Container>
    )
}