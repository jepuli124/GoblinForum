import React from 'react'


interface incomingParams{
    name: string,
    text: string,
    img?: number
}

const imagePath = "./Goblin100.png"
const Post: React.FC<incomingParams> = ({name, text}) => {
    
    return (
    <div style={{display: 'flex', gap: "1rem"}}>
        <div>
         <img src={imagePath}></img>
        </div>
        <div style={{}}>
        <h2 style={{justifySelf: "left", fontFamily: "grabstein"}}>{name}</h2>
        <h3>{text}</h3>
        </div>
        
    </div>
    )
}

export default Post