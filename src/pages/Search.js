import React, { useEffect } from 'react';
import {
  Link,
  useSearchParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import unbxdSearchConfig from '../config/siteconfig.json';
import UnbxdSearch from '@unbxd-ui/vanilla-search-library';
const unbxdCallbackEcma = function (instance, type, data) {};

export default function Search() {
  let navigate = useNavigate();
  const { hash } = useLocation();
  const loadUnbxdSearch = () => {
    window.unbxdSearch = new UnbxdSearch({
      siteKey: unbxdSearchConfig.siteKey,
      apiKey: unbxdSearchConfig.apiKey,
      hashMode: true,
      updateUrls: true,
      products: {
        el: document.getElementById('searchResultsWrapper'),
        productType: 'SEARCH',
        onProductClick: function (product, e) {
          navigate(`/product/${product.uniqueId}`);
        },
      },
      facets: {
        facetsEl: document.querySelectorAll('.UNX-facet-wrapper'),
      },
    });
  };
  useEffect(() => {
    console.log(hash, 'hash');
    if (
      !window.unbxdSearch ||
      window.unbxdSearch.getQueryParams().q !==
        window.unbxdSearch.state.userInput
    ) {
      loadUnbxdSearch();
    }
  }, [hash]);
  return (
    <div className="container-body">
      <div className="UNX-results-container">
        <div className="UNX-head-wrapper"></div>
        <div className="UNX-product-results">
          <div className="UNX-facet-wrapper"></div>
          <div className="UNX-product-list">
            <div
              className="UNX-product-wrapper"
              id="searchResultsWrapper"
            ></div>
          </div>
        </div>
        <div className="UNX-loader-container" id="loaderEl"></div>
        <div id="noResultWrapper"></div>
        <div
          id="clickScrollContainer"
          className="UNX-change-pagination-wrap"
        ></div>
      </div>
    </div>
  );
}
