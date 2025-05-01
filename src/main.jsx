
import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import WelcomeScreen from './Components/welcomeScreen.jsx';

function Root() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setShowWelcome(true); // Always show welcome on load

    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Show welcome screen for 3 seconds

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
