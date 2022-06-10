import React from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import UnbxdSearchWrapper from '@unbxd-ui/react-search-sdk';
import unbxdSearchConfig from '../config/siteconfig.json';
import '@unbxd-ui/react-search-sdk/public/dist/css/core.css';
import { Products, Pagination, Sort } from '@unbxd-ui/react-search-sdk';

const attributesMap = {
  title: 'title',
  uniqueId: 'uniqueId',
  imageUrl: 'imageUrl',
  price: 'max_price',
  sellingPrice: 'min_price',
  productUrl: '',
};
export default function Search() {
  const [params] = useSearchParams();
  let navigate = useNavigate();
  console.log(params);
  const searchConfigurations = {
    hashMode: true,
    updateUrl: true,
  };
  const onRouteChange = (searchObj, hash, refreshId) => {
    console.log(searchObj, hash, refreshId, 'onRouteChange');
  };
  const onProductClick = (product) => {
    navigate(`/product/${product.uniqueId}`);
  };
  return (
    <div className="container-body">
      <UnbxdSearchWrapper
        searchConfigurations={searchConfigurations}
        siteKey={unbxdSearchConfig.siteKey}
        apiKey={unbxdSearchConfig.apiKey}
        onRouteChange={onRouteChange}
      >
        <Pagination />
        <Products
          attributesMap={attributesMap}
          onProductClick={onProductClick}
        />
      </UnbxdSearchWrapper>
    </div>
  );
}
