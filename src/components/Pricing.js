import React from 'react';

const Pricing = () => {
  return (
    <div id="pricing" className="pricing">
      <h1>Pricing</h1>
      <div className="price-tiers">
        <div className="lite">
          <h2>Activist Lite</h2>
          <p>
            The Activist Lite package
            features automatic likes,
            and the ability to select your
            cause. This package allows the user to
            gain a light introduction into activism.
          </p>
        </div>
        <div className="future-leader">
          <h2>Future Leader</h2>
          <p>
            The Future Leader package is suitable
            for anyone with the hope of making activism a
            career. With this package, you will recieve
            all features, plus the ability for one on one
            coaching, from a real live activist. They will
            be available 24/7, to assist you.
          </p>
        </div>
        <div className="foot-soldier">
          <h2>Foot Soldier</h2>
          <p>
            The Foot Soldier package is great for
            the on the go activist. If you truly care about
            the causes, but can't find the time to hit
            the like button, or share the latest article you
            read, this package is for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
