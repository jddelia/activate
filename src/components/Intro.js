import React from 'react';
import axios from 'axios';

const Intro = (props) => {
  let user, userPicture, userName;
  if (props.user) {
    user = props.user[0];
    userPicture = (
      <img className="thumbnail" src={user.picture.large} />
    );
    let first = user.name.first[0].toUpperCase() + user.name.first.slice(1);
    let last = user.name.last[0].toUpperCase() + user.name.last.slice(1);
    userName = (
      <div className="user-name"><p>{first + " " + last}</p></div>
    );
  }

  const handleClick = () => {
    axios.get('https://randomuser.me/api/')
    .then(res => {
      props.onClick(res.data.results);
    });
  }

  return (
    <div id="about" className="intro">
      <section className="description">
        <h2 className="desc-title">How It Works</h2>
        <div className="desc-text">
          <p>
            This app provides a fully integrated,
            decentralized, scalable infrastructure,
            with peer-to-peer functionality. The user
            is able to connect through a distributed system,
            optimized with the latest machine learning tech.
            This allows for a reliable network, by which, the
            user can out-source their activism through our
            algorithm.
          </p>
        </div>
      </section>
      <section className="testimonial">
        <div className="user-thumbnail">
          {userPicture}
        </div>
        {userName}
        <div className="user-comment">
          <p>
            "{props.comment.comment}"
          </p>
        </div>
        <div className="more-reviews">
          <div onClick={handleClick} className="reviews-btn">More Reviews</div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
