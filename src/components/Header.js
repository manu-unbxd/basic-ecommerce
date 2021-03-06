import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
  let navigate = useNavigate();
  let location = useLocation();
  const inputRef = useRef();
  const gotToSearch = (e) => {
    navigate(`/search#q=${inputRef.current.value}`);
  };
  console.log(location, 'paramsparams');
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: 'solid 1px black',
        padding: '12px 24px',
        alignItems: 'center',
      }}
    >
      <div>
        <Link
          style={{
            fontWeight: 'bold',
          }}
          to="/"
        >
          {' '}
          Home{' '}
        </Link>
      </div>
      <nav>
        <input type="text" ref={inputRef} placeholder="Search" />
        <button onClick={gotToSearch}>Search</button>
      </nav>
    </header>
  );
}
