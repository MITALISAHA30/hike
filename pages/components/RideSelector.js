import React, { useEffect,useState } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'
import Link from 'next/link'
import GoogleMap from './Mapcomponents'


const RideSelector = ({ pickupCoordinates,dropoffCoordinates}) => {
        const  [rideDuration,setRideDuration]  = useState(0)
        useEffect(()   => { 
                 fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${pickupCoordinates}&destination=${dropoffCoordinates}&apiKey=AIzaSyA0jYRLOBdKFRESsg0QvzdrfSqgxKa06F4`, { mode: 'no-cors'})   
                     .then(res =>{
                
                res.json()})
            .then(data => {
                setRideDuration(data?.routes[0].duration /100);
                     })
            
                     
},      [ pickupCoordinates,dropoffCoordinates])

return (
    <Wrapper>
            
                <Title>Choose a ride, or swipe up for more</Title>
        <CarList>
                {carList.map((car,index)=>(
                        <Car key={index}>
                                <CarImage src={car.imgUrl}/>
                                <CarDetails>
                                        <Service>{car.service}</Service>
                                        <Time>5 min away</Time>
                                </CarDetails>
                                <Price>{'$' + (rideDuration* car.multiplier).toFixed(2)}</Price>
                        </Car>

                ))  }
               

        </CarList>
        </Wrapper>
  )
}

export default RideSelector
const CarDetails=tw.div``
const Service=tw.div`
font-medium`
const Time=tw.div`
text-xs text-blue-500`
const Price =tw.div`
text-sm`

const CarImage=tw.img`
h-14 mr-4`

const Car=tw.div`
flex p-4 items center`
const Title=tw.div`
`
const CarList=tw.div`
overflow-y-scroll`

const Wrapper=tw.div`
flex-1 overflow-y-scroll flex flex-col`