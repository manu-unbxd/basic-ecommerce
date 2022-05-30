import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import unbxdSearchConfig from '../config/siteconfig.json';

export default function Product() {
  let params = useParams();
  console.log(params, 'params');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    console.log(unbxdSearchConfig);
    fetch(
      `https://search.unbxd.io/${unbxdSearchConfig.apiKey}/${unbxdSearchConfig.siteKey}/search?q=*&filter=uniqueId:${params.productId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          response: { products },
        } = data;
        if (products.length === 1) {
          setProduct(products[0]);
        } else {
          setError(`Failed to load the Product`);
        }
      });
  }, []);
  return (
    <div>
      {!error || (product && <div>Loading...</div>)}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.imageUrl[0]} />
          <p>{product.description}</p>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}
