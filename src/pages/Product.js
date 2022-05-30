import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import unbxdSearchConfig from '../config/siteconfig.json';

export default function Product() {
  let params = useParams();
  console.log(params, 'params');
  const [product, setProduct] = useState(null);
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
        setProduct(products[0]);
      });
  }, [params]);
  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.imageUrl[0]} />
          <p>{product.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
