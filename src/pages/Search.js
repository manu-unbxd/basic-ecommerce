import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Search() {
  const [params] = useSearchParams();
  console.log(params);
  return (
    <div>
      <h1>Search!</h1>
      <div>
        <Link to="/product/p1234"> product- {params.get('q')} </Link>
      </div>
    </div>
  );
}
