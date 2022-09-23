import { useSelector } from 'react-redux';

export default function Greeting() {
  const message = useSelector((state) => state);
  return (
    <div className="App">
      <header className="App-header">
        {message ? (
          <p style={{ fontSize: 26 }}>
            message:
            {message.greet}
            !
          </p>
        ) : (
          <p style={{ fontSize: 26 }}>No message available! </p>
        )}
      </header>
    </div>
  );
}
