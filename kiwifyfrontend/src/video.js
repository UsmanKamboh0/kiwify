import React from 'react';
import ReactPlayer from 'react-player';
import './video.css'
const Player = () => {
    return (
        <>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=XwQpCvO4_U8"
                width="100%"
                height="500px"
                controls
            />

        </>

    )
}


export default Player;