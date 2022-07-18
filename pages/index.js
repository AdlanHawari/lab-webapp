import { data } from 'autoprefixer'
import { MyLink } from 'components/general/MyLink'
import Button from 'components/small/button_fixed/Button'
import { ACCESS_CODE } from 'constants/Access_Code'
import { useAuth } from 'hooks/fetcher/auth/useAuth'
import useUser from 'hooks/fetcher/auth/useUser'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'

export default function Home() {

  const { user, loading,error, mutate } = useUser()
  const auth = useAuth()
  const router = useRouter()
  const [role, setRole] = useState("")

  // async function wewe(){
  //   const a = await auth.isLoggedIn('/get-profile')
  //   console.log("index", a)
  //   return a
  // }
  // console.log(user)
  // console.log(error)


  useEffect(() => {
    if(user){
      // setRole(user.role.name)
      console.log("user", user)
      // console.log(user.data.role.access_code)
      // const role = user.data?.role.access_code
      console.log("user ni")
      if(user.data){

        if(user.data.role.access_code == ACCESS_CODE.ADMIN){
          router.push("/login/welcomeSU")
        }
        if(user.data.role.access_code == ACCESS_CODE.CLIENT){
          router.push("/client/uji")
        }
        if(user.data.role.access_code == ACCESS_CODE.PERSONNEL){
          router.push("/personel/uji")
        }
      }

    }
    // else{
    //   router.push("/login")
    // }
    if(error){
      console.log(user)
      // console.log("index error")
      // console.log(error.status)
      router.replace("/login")
      // mutate()
    }

  }, [user,error])

  // useEffect(() => {
  //   if(error){
  //     router.replace("/login")
  //   }
  // })
  
  

  return (
    <div className="">
      {loading &&
        <h1>LOADING</h1>
      }
      {/* {error &&
       <h1>ini error</h1>
      } */}
      

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
