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
    const updateStrikes = () =>{
        if (strikes == 2 ){
            reset()
        } else{
            setStrikes(strikes +1)
        } 
    };
    const updateBalls = () =>{
        if (balls == 3){
            reset()
        }else{
            setBalls(balls +1)
        }
    }
    const updateFouls = () =>{
        if (strikes == 2){
           setFouls(fouls +1)
        }else{
            setStrikes(strikes +1)
            setFouls(fouls +1)
        }
    }  
    const updateHits = () =>{
        setHits(hits +1)
        reset()
    };
    return(
        <>
        <Display strikes={strikes} balls={balls} fouls={fouls} hits={hits} />
        <button onClick={() => updateStrikes()}>Strikes</button>
        <button onClick={() => updateBalls()}>Balls</button>
        <button onClick={() => updateFouls()}>Fouls</button>
        <button onClick={() => updateHits()}>Hits</button>
        </>
    )
};

export default Dashboard;
