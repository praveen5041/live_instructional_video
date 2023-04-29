import React from 'react'
import ReactPlayer from 'react-player'
import './stream.css'
function VideoPlayer(props) {
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        url={props.videoUrl}
        controls={true}
        width="25%"
        height="25"
      />
    </div>
  )
}

export default VideoPlayer