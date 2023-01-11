import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from  'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';
function Viewrestaurant() {
    const params = useParams()
 //   console.log(params.id);
     //To hold Value
     const [allRestaurants,setRestaurants]=useState([])
     //function to call Api to get all restaurent items from restaurent.json
 
     const getRestaurents=async()=>{
         await fetch('/restaurants.json')
         .then((data)=>{
           data.json()
           .then((result)=>{
             setRestaurants(result.restaurants);//to  convert array of object to array  here 'restaurants' is the name from restaurants.json
          //   console.log(result);
           })
            // console.log(data);
         })
     }
   //  console.log(allRestaurants);

     useEffect(()=>{
         getRestaurents();
     },[])
 
     const viewrest = allRestaurants.find(item=>item.id == params.id)
     console.log(viewrest);
  return (
    <> {
        viewrest?
        (
            <Row>
                <Col>
                <Image src={viewrest.photograph} fluid/>
                </Col>
                <Col>
                <p>ID : {viewrest.id} </p>
                <h3>Name : {viewrest.name} </h3>
                <h4>Neighborhood : {viewrest.neighborhood} </h4>
                <h5>Address : {viewrest.address} </h5>
                <h6>Cuisine Type : {viewrest.cuisine_type} </h6>
                <Restoperation operate={viewrest.operating_hours}/>
                <br/><br/>
                <Restreview reviews={viewrest.reviews}/>
                </Col>
            </Row>
        ):'null'
    }       
    </>
  )
}

export default Viewrestaurant