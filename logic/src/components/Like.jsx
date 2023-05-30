import { useState } from "react"

const Like = () => {

    const[like, setLike] = useState(0)

    const morelikes = () =>{
        
        setLike(prevLike => prevLike + 1)

    }

    const lessLikes = () =>{
        
        if(like > 0){
            setLike(prevLike => prevLike - 1)
        }

    }

    return(
        <div>
            <div>    
                <h1>Likes: {like}</h1>
                <button onClick={morelikes}>Like</button>
                <button onClick={lessLikes}>Dislike</button>
            </div>
            <hr />
        </div>
    )
}

export default Like;