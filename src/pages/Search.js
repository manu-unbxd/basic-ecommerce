import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import unbxdSearchConfig from '../config/siteconfig.json';

export default function Search() {
  const [params] = useSearchParams();
  console.log(params);
  return (
    <div className="container-body">
      <h1>Search!</h1>
      <div>
        <Link to="/product/p1234"> product- {params.get('q')} </Link>
      </div>
    </div>
  );
}
