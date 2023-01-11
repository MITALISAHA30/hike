import {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import GoogleMap from '@googlemaps/react-wrapper'




const Map = (props) => {
    useEffect(() => {
        const map =new GoogleMap.Map({
            container: 'map',
            style: {mapStyles},
            center: [20.5937,78.9629],
            zoom: 3
        })

        if(props.pickupCoordinates){
            addToMap(map,props.pickupCoordinates)
        }
          

        if(props.dropoffCoordinates){
            addToMap(map,props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ],{
                padding: 60
            })
        }
      
    }, [props.pickupCoordinates, props.dropoffCoordinates])

     
    
    
    const addToMap =(map) => {
        const marker1=new  marker1.Marker()
        .setLngLat([coordinates])
        .addTo(map);
    }

    
    return <Wrapper id='map' apikey='AIzaSyA0jYRLOBdKFRESsg0QvzdrfSqgxKa06F4'></Wrapper>
}
export default Map

const  Wrapper =tw.div`
flex-1
`