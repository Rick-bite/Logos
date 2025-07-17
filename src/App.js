import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (input.trim().toLowerCase() === 'вода') {
      setMessage('✅ Правильно, океан складається повністю з води.');
    } else {
      setMessage('❌ Ні, спробуй ще раз.\nПідказка: З чого складається океан?');
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: 'url(/Logos.png)', // Картинка из public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="welcome">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28The_Dark_Knight%29.jpg"
          alt="Joker"
          className="joker-img"
        />
        <p>
          Ласкаво прошу до пекла, клоуне!<br />
          Ахахаха!<br />
          Одна помилка — і ви програли!<br />
          Не засмучуйте мене,<br />
          я тільки почав веселитися!
        </p>
      </div>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EXeTwQWrcwY"
          title="Joker"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="password-section">
        <label htmlFor="password">Введіть пароль: </label>
        <input
          type="text"
          id="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Відправити</button>
      </div>

      {message && (
        <div className="message">
          {message.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
