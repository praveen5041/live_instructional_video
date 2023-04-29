import React from 'react'
import { useState } from 'react'
import VideoPlayer from'./VideoPlayer'
import WebCam from './WebcamFeed'
import Emotion from './EmotionStatus'
function Video() {
    const [emotion, setEmotion] = useState('neutral');

    function handleEmotionChange(newEmotion) {
      setEmotion(newEmotion);
    }

    const videoUrl = 'https://example.com/my-video.mp4';
    
    function handleEmotionChange(emotion) {
      console.log('Emotion changed to:', emotion);
      setEmotion(emotion)
      // Update the emotional status of the student in the parent component.
    }
  return (
    <div className="grid-container">
    <div className="video-player">
      <VideoPlayer videoUrl={videoUrl} />
    </div>
    <div className="webcam-feed">
      <WebCam onEmotionChange={handleEmotionChange} />
    </div>
    <div className="emotion-status">
      <Emotion emotion={emotion} />
    </div>
  </div>
  )
}

export default Video