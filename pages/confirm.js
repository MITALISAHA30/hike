import { useEffect,useState } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'
import Map from './components/Mapcomponents'


const Confirm = () => {
  const router = useRouter()
  const {pickup,dropoff} = router.query
  console.log("Pickup",pickup);
  console.log("Dropoff",dropoff)


  const [pickupCoordinates,setPickupCoordinates] = useState([0,0])
  const [dropoffCoordinates,setDropoffCoordinates] = useState([0,0])
  const getPickupCoordinates = (pickup) => {
  
    RideSelector=fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?${pickup}&apiKey=AIzaSyA0jYRLOBdKFRESsg0QvzdrfSqgxKa06F4`
    )
     .then(response => response.json())
     .then(data =>{
       
        setPickupCoordinates(data?.features?.center);
     })
  }
  const getDropoffCoordinates = (dropoff) => {
    
    RideSelector=fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?${dropoff}&apiKey=AIzaSyA0jYRLOBdKFRESsg0QvzdrfSqgxKa06F4`

    )
     .then(response =>  response.json())
     .then(data =>{
        setDropoffCoordinates(data?.features?.center)
     })
  }
  useEffect(()=>{
    getPickupCoordinates(pickup)
    getDropoffCoordinates(dropoff)
} , [pickup,dropoff])
  return (
    <Wrapper>
      <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}

      />
           <ButtonContainer>
              <Link href ="/search">
                <BackButton src ='https://img.icons8.com/ios-filled/50/000000/left.png'/>
              </Link>
           </ButtonContainer>
             <iframe style={{width:"100%",height:"50%"}} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sec-8 bhilai street 28&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      <RideContainer>
            <RideSelector/>
         
            <ConfirmButtonContainer>
               <ConfirmButton>
               Confirm UberX
              </ConfirmButton>
            </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm




const ConfirmButton=tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer=tw.div`
border-t-2
`
const RideContainer=tw.div`
flex-1 flex flex-col`
const Wrapper=tw.div`
flex h-screen flex-col`

const ButtonContainer =tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton =tw.img`
 h-full object-contain`