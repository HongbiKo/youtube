import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/watch/${text}`)
  }
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <div>logo</div>
        <input type="text" value={text} onChange={handleChange}></input>
        <button>search</button>
      </form>
    </header>
  );
}

