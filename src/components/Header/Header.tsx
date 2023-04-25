import React, { useState } from 'react';
import './Header.css';

type HeaderProps = {
  onSubmit: (value: string) => void;
};

function Header({ onSubmit }: HeaderProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="header">
      <h1>Github Users</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Text Here" className="textfield" onChange={(e) => setQuery(e.target.value)} value={query} />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </header>
  );
}

export default Header;