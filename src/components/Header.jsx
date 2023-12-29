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

  useEffect(()=>{setText(keyword || '')}, [keyword]);
  
  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand'/>
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form className='w-full flex justify-center'onSubmit={handleSubmit}>
        <input className='w-7/12 outline-none bg-black text-gray-50 pl-2' type="text" placeholder='Search...' value={text} onChange={handleChange}/>
        <button className='bg-zinc-600 px-4'><BsSearch /></button>
      </form>
    </header>
  );
}



