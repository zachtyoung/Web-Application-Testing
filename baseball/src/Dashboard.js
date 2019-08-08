import React, {useState} from "react";
import Display from './Display'
const Dashboard = props => {
    const [strikes, setStrikes] = useState(0)
    const [balls, setBalls] = useState(0)
    const [fouls, setFouls] = useState(0)
    const [hits, setHits] = useState(0)
    const reset = () =>{
        setBalls(0)
        setFouls(0)
        setStrikes(0)
    }
    const updateFouls = () =>{
        if (strikes == 2){
           setFouls(fouls +1)
        }else{
            setStrikes(strikes +1)
            setFouls(fouls +1)
        }
    }  
    return(
        <>
        <Display strikes={strikes} balls={balls} fouls={fouls} hits={hits} />
        <button onClick={() => strikes == 2 ? reset() : setStrikes(strikes +1)}>Strikes</button>
        <button onClick={() => balls == 3 ? reset(): setBalls(balls +1)}>Balls</button>
        <button onClick={() => updateFouls()}>Fouls</button>
        <button onClick={() => {reset(); setHits(hits +1)}}>Hits</button>
        </>
    )
};
export default Dashboard;
