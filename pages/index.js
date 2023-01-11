import { useEffect,useState } from 'react'
import Head from 'next/head' 
import Image from 'next/image' 
import tw from "tailwind-styled-components"
import Link from 'next/link'
import {auth} from '../firebase'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {
  const [user,setUser]= useState(null)
  const router=useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth,user => {
      if  (user) {
        setUser({
            name:  user.displayName,
            photoUrl:  user.photoURL,
        })
      }  else {
            setUser(null)
            router.push('/login')
      }
    })
  },[])
  return (                                                                                                                                                                                                                  
    <Wrapper>


      
      <iframe style={{width:"100%",height:"100%"}} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sec-8 bhilai street 28&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      <ActionItems>
          <Header> 
            <UberLogo src="https://previews.123rf.com/images/enterline/enterline1610/enterline161001689/64651856-the-word-hike-written-in-tile-letters-isolated-on-a-white-background-.jpg"/>
            <Profile>
              <Name>{user && user.name}</Name>
              <UserImage src ={user && user.photoUrl}  onClick ={() => signOut(auth)}/>
             
           </Profile>
         </Header>
         <ActionButtons>
            <Link href="/search">
              <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                 Ride
              </ActionButton>
            </Link>
              <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
                 Wheels
              </ActionButton>
              <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
                 Reserve
              </ActionButton>
          </ActionButtons>
          <InputButton>
          where to?
          </InputButton>
      </ActionItems>
    </Wrapper>
  )
  }
 


const Wrapper = tw.div`
 flex flex-col bg-gray-300 h-screen
`
const Map = tw.div`
bg-white-300 flex-1
`
const ActionItems = tw.div`
 flex-1
`
const Header = tw.div`
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center 
`
const Name = tw.div`
mr-4 w-12 rounded-full border border-gray-200 p-px
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`
const ActionButtons = tw.div`
flex 
`
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`