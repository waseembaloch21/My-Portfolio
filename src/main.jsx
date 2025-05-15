
import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import WelcomeScreen from './Components/welcomeScreen.jsx';

function Root() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setShowWelcome(true);

    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StrictMode>
      {showWelcome ? (
        <WelcomeScreen setShowWelcome={setShowWelcome} />
      ) : (
        <App />
      )}
    </StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
