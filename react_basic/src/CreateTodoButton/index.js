import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClick = (msg) => {
        console.log(msg);
    };
  return (
    <button 
    className="CreateTodoButton"
    onClick={() => onClick('CreateTodoButton')}
    >
        +
        </button>
  );
}

export { CreateTodoButton };