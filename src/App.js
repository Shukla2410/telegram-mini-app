import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userRegistered, setUserRegistered] = useState(false);
  const [certificateId, setCertificateId] = useState(null);

  useEffect(() => {
    // Check if Telegram Web App SDK is loaded
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Make the Mini App full-screen inside Telegram
      tg.MainButton.text = "Close App";
      tg.MainButton.show();
      tg.MainButton.onClick(() => tg.close()); // Close the app when clicked
    }
  }, []);

  const handleRegistration = () => {
    // Simulate creating an NFT certificate after registration
    const generatedCertificateId = "CERT12345"; // In a real app, this would be generated by the blockchain
    setCertificateId(generatedCertificateId);
    setUserRegistered(true); // Mark the user as registered
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Event</h1>
      <p>Register for the event to get a tamper-proof certificate!</p>
      {userRegistered ? (
        <div>
          <h2>Congratulations!</h2>
          <p>Your certificate ID is: {certificateId}</p>
          <p>This is a simulated certificate (NFT).</p>
        </div>
      ) : (
        <div>
          <button onClick={handleRegistration}>Register Now</button>
          <p>Click the button above to register for the event.</p>
        </div>
      )}
    </div>
  );
}

export default App;
