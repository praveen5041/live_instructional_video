import React from 'react'
import './stream.css'
function EmotionStatus(props) {
    let icon = null;

    switch (props.emotion) {
      case 'happy':
        icon = <i className="far fa-smile"></i>;
        break;
      case 'sad':
        icon = <i className="far fa-frown"></i>;
        break;
      case 'angry':
        icon = <i className="far fa-angry"></i>;
        break;
      default:
        icon = <i className="far fa-meh"></i>;
    }
  return (
    <div className="emotion-status-wrapper">
      {icon}
    </div>
  )
}

export default EmotionStatus