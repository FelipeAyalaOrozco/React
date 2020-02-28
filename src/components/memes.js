import React from 'react'
import Meme from './meme'

const Memes = ({ memes }) => {
    return (
        <div>
            <center><h1>Templates</h1></center>
            <div class="row ">
            {memes.map((meme) => (
             
            
                    <Meme meme={meme} />
                
               
            ))}
             </div>
        </div>


    )
};

export default Memes