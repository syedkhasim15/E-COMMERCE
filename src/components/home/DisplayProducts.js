import React from 'react';
import ProductCards from '../product/ProductCards';
import useProductData from '../../hooks/useProductData';


export default function DisplayProducts({ category,currentPage,dispatch }) {

  return (
    <>

      <ProductCards data={useProductData(category, currentPage.page)} />
    </>
  );
}
