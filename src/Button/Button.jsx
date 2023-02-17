import React from 'react'

const Button = () => {
  return ( 
    <button
      onClick={function() {
        alert('CLICKED!')
      }}
    >
    </button>
  );
}

export default Button;