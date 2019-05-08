import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let helloWorld = 'Добро пожаловать в Путь к изучению React!';
    let user = {
        first_name : 'Ilyas',
        last_name : 'ismailov',
        midle_name : 'none',
        login : 'gear',
    };
    return (
    <div className="App">
        <header className="App-header">
            <h2>{helloWorld}</h2>
            <p> Welcome {user.login} !</p>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
  );
}

export default App;
