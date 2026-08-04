import React, { useCallback } from 'react'
import eventBusHandler from '../hooks/EventBus'

interface incomingParams{
    URL: string
}

const AddComment: React.FC<incomingParams> = ({URL}) => {

    const doPost = useCallback(async(e: HTMLFormElement) => {
        try{
            const tempData = new FormData(e)

            const response = await fetch(URL, {
            method: 'POST',
            body: tempData
            })

            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const returnedData = await response.json()
            eventBusHandler.publish("commentPublished", Object.values(returnedData.body))

            } catch (err) {
                console.error('Form failed:', err);

            }
    
    return false;
    }, [])

    return (
    <div>
        <form
            method="post"
            onSubmit={(e) => {
                e.preventDefault()
                doPost(e.target)
                e.target.reset()
            }}
        >
            <input type="text" name="comment" placeholder='Comment' maxLength={9001}/>
            <input type="submit" />
        </form>
    </div>
    )
}

export default AddComment