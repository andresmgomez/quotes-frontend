import { useState } from 'react';
import './App.css';

import FormMessage from './components/Message/FormMessage';
import ListMessages from './components/Messages/ListMessages';

function App() {
  const [showMessages, setShowMessages] = useState(false)
  const [displayMessages, setDisplayMessages] = useState([]);

  const addNewMessage = (userSender, userMessage) => {
    setDisplayMessages((prevDisplayMessage) => {
      setShowMessages(!showMessages)
      return [
        ...prevDisplayMessage,
        {
          sender: userSender, text: userMessage
        }
      ];
    });
  };

  return (
    <div className='App-header'>
      <FormMessage onAddEvent={addNewMessage} />
      {showMessages && (
        <ListMessages messages={displayMessages} />
      )}
    </div>
  );
}

export default App;
