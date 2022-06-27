import React from 'react';
import questions from './data';
import Quest from './question';
import './index.css'

function App() {  
  return (
    <div className="app">
      <header>
        <h2>Questions And Answers About Login</h2>
      </header>
      {questions.map( (question) => {
        return <Quest {...question} key = {question.id}/>
      })}
    </div>
  );
}


export default App;
