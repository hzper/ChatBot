import React from 'react';
import logo from './logo.svg';
import ChatBot from 'react-simple-chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatBot
           steps={[
    {
         id: 'hello-world',
         message: 'Hello World!',
         end: true,
    },
  ]}
/>

      </header>
    </div>
  );
}

export default App;
