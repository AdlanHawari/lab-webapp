import { data } from 'autoprefixer'
import { MyLink } from 'components/general/MyLink'
import Button from 'components/small/button_fixed/Button'
import useUser from 'hooks/useUser'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'

export default function Home() {

  const { user, loading,error, mutate } = useUser()
  const router = useRouter()
  const [role, setRole] = useState("")
  
  useEffect(() => {
    if(user){
      // setRole(user.role.name)
      console.log(user)
    }

  }, [user])
  

  return (
    <div className="">
      {loading &&
        <h1>LOADING</h1>
      }
      {user &&
       <h1>{user.message[0]}</h1>
      }
      

    </div>

    
    
    
      
  //      <div className="flex flex-col space-y-6 h-screen w-screen justify-center items-center">
      
  //     <h1>
  //       This page will perform token checking.  
  //     </h1>
  //     <h2>
  //       Currently, this page is still under construction.
  //     </h2>
  //     <div className="grid grid-flow-row gap-y-6 w-96">
  //       <MyLink href="/login">
  //         <Button buttonStyle="primary_default" className="hover:bg-primary-darken20">
  //           Login
  //         </Button>
  //       </MyLink>
  //       <MyLink href="/client/log">
  //         <Button buttonStyle="secondary_neutral" className="hover:bg-grey-400 hover:text-white">
  //           Client
  //         </Button>
  //       </MyLink>
  //       <MyLink href="/manajemen/log">
  //         <Button buttonStyle="secondary_default" className="hover:bg-primary-darken20 hover:text-white">
  //           Manajemen
  //         </Button>
  //       </MyLink>
  //       <MyLink href="/personel/log">
  //         <Button buttonStyle="secondary_disabled" className="bg-secondary text-white hover:bg-secondary-darker20">
  //           Personel
  //         </Button>
  //       </MyLink>
  //     </div> 
  //  </div>
   
  )
}
