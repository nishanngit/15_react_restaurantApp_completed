import React, { useEffect, useState } from 'react';
//import React from 'react';
import Restaurantcards from './Restaurantcards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurentlist() {
    //To hold Value
    const[allRestaurants,setRestaurants]=useState([])
  
  const dispatch = useDispatch();
  const result = useSelector(state=>state.restaurantReducer)
  console.log(result)
  const {restaurantList}=result
    useEffect(()=>{
      //  getRestaurents()
        dispatch(RestaurantListAction());
    }, [])
  return (
    <Row>{
      restaurantList.map(item=>(
       // <h1>{item.name}</h1>
       <Col  sm={12} md={6} lg={4} xl={3}>
       <Restaurantcards restaurant={item}/>
       </Col>
      ))
      }  
      </Row>
  )
}

export default Restaurentlist