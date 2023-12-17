import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchSingleProducts } from './actions/productAction'

const Data = () => {
const dispatch=useDispatch()
const productsData=useSelector(store=>store.product)
console.log(productsData)
const product=productsData.product

useEffect(()=>{
  try{
      dispatch(fetchSingleProducts(20))
  }
  catch(error){
      console.log('Error in fetching data')
  }
},[dispatch])
  return (
    <>
    {product.title}
    </>
  )
}

export default Data