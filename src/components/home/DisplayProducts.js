import React from 'react';
import ProductCards from '../product/ProductCards';
import Pagination from '../pagination/Pagination';
import useProductData from '../../hooks/useProductData';


export default function DisplayProducts({ category,currentPage,dispatch }) {

  return (
    <>
      <Pagination page={currentPage.page} dispatch={dispatch} />
      <ProductCards data={useProductData(category, currentPage.page)} />
    </>
  );
}
