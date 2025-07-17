import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (input.trim().toLowerCase() === 'voda') {
      setMessage('✅ Presne tak, oceán sa skladá výlučne z vody.');
    } else {
      setMessage('❌ Nie, skús to znova.\nNápoveda: Prečo vzniká oceán?');
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: 'url(/Logos.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="overlay">
        <div className="welcome">
          <h1 style={{ marginBottom: '0.5rem' }}>QUEST</h1>
          <p>Pridajte sa k nám na našu malú hru pre vás</p>
        </div>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Gaclt6pIwrg"
            title="logos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="password-section">
          <label htmlFor="password">Zadajte heslo: </label>
          <input
            type="text"
            id="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleClick}>Odoslať</button>
        </div>

        {message && (
          <div className="message">
            {message.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
