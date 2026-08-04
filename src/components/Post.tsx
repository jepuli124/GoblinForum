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
        <section style={{ margin: "5px", padding: "0px"}}>
         <img src={imagePath} style={{width: "100%", height: "100%"}}></img>
        </section>
        <section style={{ margin: "5px", width: "100%"}}>
        <h2 style={{justifySelf: "left", marginLeft: "20px", fontFamily: "grabstein"}}>{name}</h2>
        <h3 style={{justifySelf: "left", marginLeft: "20px", fontFamily: "grabstein"}}>{text}</h3>
        </section>
        
    </div>
    )
}

export default Post