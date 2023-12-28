import React from 'react';
import { useState, useEffect } from 'react';
import { BsYoutube } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Header() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const {keyword} = useParams();

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  useEffect(()=>{setText(keyword || '')}, [keyword])
  return (
    <header>
      <Link to='/'><BsYoutube /><div>Youtube</div></Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={text} onChange={handleChange}/>
        <button><BsSearch /></button>
      </form>
    </header>
  );
}



