import { useState, useEffect } from 'react';

function Greeting() {
  const [message, setMessage] = useState({});
  const [hasLoaded, setHasLoaded] = useState();
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/api/v1/messages')
        .then((res) => res.json())
        .then((result) => {
          setMessage(result.data);
          setHasLoaded(true);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {hasLoaded ? (
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

export default Greeting;
