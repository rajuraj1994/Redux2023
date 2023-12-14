import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Test = () => {
    const data=useSelector(store=>store.test)
    const dispatch=useDispatch()

    const addItem=()=>(
        dispatch({type:'ADD_ITEM'})
    )
  return (
    <>
    <h2>The number of item in the store is {data.count}</h2>
    <button onClick={addItem}>Add</button> 
    &nbsp;&nbsp;&nbsp; 
    <button>Remove</button>
    </>
  )
}

export default Test