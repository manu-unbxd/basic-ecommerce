import React, { useEffect } from 'react';
import {
  Link,
  useSearchParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import unbxdSearchConfig from '../config/siteconfig.json';
const unbxdCallbackEcma = function (instance, type, data) {};

export default function Search() {
  let navigate = useNavigate();
  const { hash } = useLocation();
  const loadUnbxdSearch = () => {
    window.unbxdSearch = new window.UnbxdSearch({
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
    });
  };
  useEffect(() => {
    if (window.UnbxdSearch) {
      loadUnbxdSearch();
    }
  }, [hash]);
  return (
    <div className="container-body">
      <div className="UNX-results-container">
        <div className="UNX-head-wrapper">
          <div className="UNX-selected-actions">
            <div className="UNX-bread-wrapper" id="breadcrumpContainer"></div>
            <div
              className="UNX-selected-facet-wrapper"
              id="selectedFacetWrapper"
            ></div>
          </div>
          <div
            className="UNX-product-type-block"
            id="productViewTypeContainer"
          ></div>
        </div>
        <div className="UNX-product-results">
          <div className="UNX-facet-wrapper">
            <div className="UNX-fxd-facet">
              <div
                className="UNX-selected-facet-wrapper UNX-selected-f-m"
                id="selectedMFacetWrapper"
              ></div>
              <div
                className="UNX-multilevel-block"
                id="bucketedFacetWrapper"
              ></div>
              <div className="UNX-text-facet-block" id="facetsWrapper"></div>
              <div className="UNX-m-facet-row">
                <button
                  data-action="applyFacets"
                  className="UNX-primary-btn UNX-facet-trigger"
                >
                  Apply
                </button>
                <button
                  data-action="clearFacets"
                  className="UNX-default-btn UNX-facet-trigger"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="UNX-product-list">
            <div className="UNX-result-header">
              <div id="didYouMeanWrapper" className="UNX-didyou-mean"></div>
              <div className="UNX-result-right">
                <div
                  className="UNX-change-products"
                  id="changeNoOfProducts"
                ></div>
                <div className="UNX-sort-wrapper" id="sortWrapper"></div>
                <div
                  className="UNX-change-pagination-wrap"
                  id="paginationContainer"
                ></div>
              </div>
            </div>
            <div id="bannerContainer"></div>
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
