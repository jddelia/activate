import React from 'react';

const Features = () => {
  return (
    <div className="features">
      <h1>Features</h1>
      <div className="feat-types">
        <div className="likes">
          <i className="fas fa-heart fa-5x"></i>
          <p>
            Automatic Liking - Likes on AutoPilot
          </p>
        </div>
        <div className="cause">
          <i className="far fa-hand-pointer fa-5x"></i>
          <p>
            Select Your Cause - Peace of Mind
          </p>
        </div>
        <div className="share">
          <i className="fas fa-share-alt fa-5x"></i>
          <p>
            Share With Friends - Show off your Activism
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
