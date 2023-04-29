import React, { useRef, useState } from 'react';
import './stream.css'
import webcam from 'react-webcam'
function WebcamFeed(props) {
    const webcamRef = useRef(null);
  const [emotion, setEmotion] = useState('neutral');

  function handleEmotionChange(newEmotion) {
    setEmotion(newEmotion);
    props.onEmotionChange(newEmotion);
  }
  function capture() {
    const imageSrc = webcamRef.current.getScreenshot();
    // Use imageSrc to detect emotion using a third-party API
    // and call handleEmotionChange with the detected emotion.
  }
  return (
    <div className="webcam-feed-wrapper">
      <webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture</button>
    </div>
  )
}

export default WebcamFeed