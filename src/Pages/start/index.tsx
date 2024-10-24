import { Container, EnemyImg, Imagen, LifeEnemyBar, LifeEnemyBarContainer} from "./styles";
import Img_1 from '../../assets/foto1.png'
import Img_2 from '../../assets/foto2.png'
import Img_3 from '../../assets/foto3.jpg'
import { useEffect, useState } from "react";

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

interface StartProps {
    status: StatusProps
    diceValue: number
    mana: number
    heroLife: number
    setHeroLife: (prop: number) => void
    setMana: (prop: number) => void
}

export function Start({ status, diceValue, mana, heroLife, setHeroLife, setMana }: StartProps) {

    const [enemyLife, setEnemyLife] = useState(100)
    const [enemyGiveDamage, setEnemyGiveDamage] = useState(0)
    useEffect(() => {
        if (diceValue > 0) {
            if (diceValue >= 19) {
                const heroDamage =  Math.max(enemyLife - ((((status.strength * 2) + diceValue)/100) * 100), 0)
                setEnemyLife(heroDamage)
            }
            const heroMana = Math.max(mana - Math.floor((2/status.mp) * 100), 0)
            setMana(heroMana)
            const heroDamage =  Math.max(enemyLife - (((status.strength + diceValue)/100) * 100), 0)
            setEnemyLife(heroDamage)
            const randomEnemyDamage = Math.floor(Math.random() * 20) + 1
            setEnemyGiveDamage(randomEnemyDamage)
            const enemyDamage = Math.max(heroLife - ((randomEnemyDamage /status.hp) * 100), 0)
            setHeroLife(enemyDamage)
        }
    }, [diceValue])

    const images = [
        // Img_1,
        Img_2,
        // Img_3
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        if (currentIndex >= images.length) {
            setIsFinished(true)
            return
        }

        const interval = setInterval(() =>  {
            setCurrentIndex((prevIndex) => prevIndex + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [currentIndex])

    if (isFinished) {
        return (
            <Container>
                <LifeEnemyBarContainer>
                    <LifeEnemyBar progress={enemyLife}></LifeEnemyBar>
                </LifeEnemyBarContainer>
                <h1>Inimigo da Disgraça</h1>
                <div>
                    <h2>Enemy damage: {enemyGiveDamage}</h2>
                </div>
                <EnemyImg src={Img_2}/>
            </Container>
        )
    }

    return (
        <Container>
            <Imagen src={images[currentIndex]} />
        </Container>
    )
    
}