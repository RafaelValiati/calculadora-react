import styles from './Calculate.module.css'
import Container from '../layout/Container'
import { useState} from 'react'


function Calculate(props){


    function calc(e){
        e.preventDefault();    
        if(!(x && y)){
            return alert("Fill up the inputs correctly!")
        }


        const numX = parseFloat(x)
        const numY = parseFloat(y)
       

        switch (operation){
            case 'Somar':
                setExibition(numX + numY)
                break
            case 'Subtrair':
                setExibition(numX - numY)
                break
            case 'Multiplicar':
                setExibition(numX * numY)
                break
            case 'Dividir':
                setExibition(numX/numY)
                break
            default:
                return alert("Fill up the inputs correctly!")
        }

    }


    function handleOption(e){
        setOperation(e.target.options[e.target.selectedIndex].text)
    }

    const [exibition, setExibition] = useState()
    const [operation , setOperation] = useState('')
    const [x , setX] = useState()
    const [y , setY] = useState()


    return(
        <form className={styles.form} onSubmit={calc}>
            <Container customClass="column">
                <label htmlFor="num01">Primeiro número:</label>
                <input 
                    type='number' 
                    id='num01' 
                    name="num01"
                    // value={numX}
                    onChange={(e) => setX(e.target.value)}                
                />
                <label htmlFor="num02">Segundo número:</label>
                <input 
                    type='number' 
                    id='num02' 
                    name="num02"
                    // value={numY}
                    onChange={(e) => setY(e.target.value)}
                />
                <select onChange={handleOption}>
                        <option>Operação</option>
                        {props.options.map((option, index) => (
                            <option key={index} option={option} >
                                {option}
                            </option>   
                        ))}
                </select>
                <input type="submit" value="Calcular" />
                {exibition &&(
                    <p>Resultado: {exibition}!</p>
                )}
            </Container>
        </form>
    )

}

export default Calculate