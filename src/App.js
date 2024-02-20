import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeolocationErrorPage from './Components/GeolocationErrorPage'; // Import your GeolocationErrorPage component here
import Home from './Components/Home'; // Import your Home component or landing page here

function App() {
  const [geolocationAllowed, setGeolocationAllowed] = useState(false);

  useEffect(() => {
    const checkGeolocationPermission = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
          if (result.state === 'granted') {
            setGeolocationAllowed(true);
          } else if (result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(
              () => {
                setGeolocationAllowed(true);
              },
              () => {
                setGeolocationAllowed(false);
              }
            );
          }
        });
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          () => {
            setGeolocationAllowed(true);
          },
          () => {
            setGeolocationAllowed(false);
          }
        );
      } else {
        setGeolocationAllowed(false);
      }
    };

    checkGeolocationPermission();
  }, []);

  if (!geolocationAllowed) {
    return <GeolocationErrorPage />;
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
