import React from "react";

const Display = ({strikes, balls, fouls, hits}) => {
    return(
    <>
            <div>{strikes} Strikes</div>
            <div>{balls} Balls</div>
            <div>{fouls} Fouls</div>
            <div>{hits} Hits</div>
       </>
    )
};

export default Display;
