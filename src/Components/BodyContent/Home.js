import React, { useState, useEffect } from 'react';
import './Home.css';
import Time from '../Time/Time';

const Home = () => {
  const [message, setMessage] = useState('');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
    document.title = 'Home - Landing Page';
  }, []);

  const getWelcomeMassage = () =>{
    const currentHour = new Date().getHours();
    if(currentHour < 12 ){
      return 'Good Morning!';
    }else if(currentHour < 18){
      return 'Good Afternoon!';
    }else{
      return 'Good Night!';
    }
  };

  const [welcomeMessage, setWelcomeMessage] = useState(getWelcomeMassage());

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEnterClick = () => {
    setShowWelcomeMessage(true);
  };

  return (
    <div className="container">
      {showWelcomeMessage && (
              <h1 className="welcome-message">Hi! {message},{welcomeMessage} Welcome To Our Bookshop.</h1>
            )}
      <div className="image-container">

        <div className="overlay">
          <div className="details">
            <h2>Welcome to Suraksha Book Shop!</h2>
            <p>We offer a wide selection of books on various topics.</p>
            <input className= "text"
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your name"
            />
            <button className="enter-button" onClick={handleEnterClick}>
              Enter
            </button>
            
          </div>
        </div>
      </div>
      <Time/>
    </div>
  );
};

export default Home;
