import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productAction';

const ItemData = () => {
  const dispatch = useDispatch();
  const productsData=useSelector(store=>store.productsData)
  console.log(productsData.products)
  const products=productsData.products

  useEffect(() => {
   
      try {
         dispatch(fetchProducts());
    
      } catch (error) {
        console.error('Error fetching products');
      }
    
  }, []); 

  return (
    <>
      {products && products.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </>
  );
};

export default ItemData;
