import React, { useCallback, useEffect, useState } from 'react'
import Post from './Post'
import eventBusHandler from '../hooks/EventBus'
import musicPlayer from '../hooks/MusicHook'

interface incomingParams{
    URL: string
}

const name = "Goblin"
const Posts: React.FC<incomingParams> = ({URL}) => {

    const [texts, setTexts] = useState<string[]>([])

    const handleTextUpdate = useCallback((newTexts: string[]) => {
        if(texts !== newTexts || ( Math.random() >= 0.25)){
            musicPlayer.playSFX("GoblinClashroyale.mp3", 0.5)
        }
        setTexts(newTexts)
    }, [])

    const fetchData = useCallback(async () => {
        try{


            const response = await fetch(URL, {
                method: 'get'   
            })

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const returnedData = await response.json()

            
            setTexts(Object.values(returnedData.body))

            } catch (err) {
                console.error('Get failed:', err);

            }
    }, [URL])

    useEffect(() => {
        fetchData()
        const fetchInterval = setInterval(() => {
            fetchData()
        }, 5000)

        
        const unsub = eventBusHandler.subscribe("commentPublished", handleTextUpdate)

        return () => {
            unsub()
            clearInterval(fetchInterval)
        }
    }, [])
    
    return (
    <div>
        {/* <button onClick={() => fetchData()}>Fetch comments</button> */}
        
        {texts.length == 0 ? 
        
            <p>All the goblins run away :(</p>
            
        :
        texts.length >= 40 ? 
            <>
                <h2>OVER FORTY GOBLINS</h2>
                <h1>Party TIME!!!</h1>
                <br />
            </>
        :
        <></>}

        
        {texts.map((text, index) => (
            <section key={index} >
                <div style={{margin: "5px", marginLeft: "20px"}}>   
                    <Post name={name} text={text} ></Post>
                </div>
                
            </section>
        ))}
        
        
    </div>
    )
}

export default Posts