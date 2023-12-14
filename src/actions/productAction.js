// import { FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE } from "../constants/productConstant";
// import { fetchProducts } from "../apiServer";

import axios from "axios"
import { API_URL } from "../apiServer"
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../constants/productConstant"

// export const fetchProductRequest=()=>({
//     type:FETCH_PRODUCT_REQUEST
// })

// export const fetchProductSuccess=(products)=>({
//     type:FETCH_PRODUCT_SUCCESS,
//     payload:products
// })

// export const fetchProductFailure=(error)=>({
//     type:FETCH_PRODUCT_FAILURE,
//     payload:error
// })

// // fetch product 
// export const fetchProductData=()=>async(dispatch)=>{
//     try{
//         dispatch(fetchProductRequest())
//         const products= await fetchProducts()
//         dispatch(fetchProductSuccess(products))
//     } 
//     catch(err){
//         dispatch(fetchProductFailure(err))
//     }
// }

export const fetchProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:FETCH_PRODUCT_REQUEST})
        const {data} = await axios.get(`${API_URL}`)
        dispatch({
            type:FETCH_PRODUCT_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:FETCH_PRODUCT_FAILURE,
            payload:error.message
        })
    }
}