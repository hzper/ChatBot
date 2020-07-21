import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/8fcaad77-9788-45c7-85cb-2d25b051ec7c">
          </iframe>
        </div>

        {/* <ChatBot
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you!',
              end: true,
            },
          ]}
        /> */}


      </header>
    </div>
  );
}

export default App;
