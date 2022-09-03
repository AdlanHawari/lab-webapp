import { data } from 'autoprefixer'
import { MyLink } from 'components/general/MyLink'
import Button from 'components/small/button_fixed/Button'
import { ACCESS_CODE } from 'constants/Access_Code'
import { userType } from 'constants/UserType'
import { useAuth } from 'hooks/fetcher/auth/useAuth'
import useUser from 'hooks/fetcher/auth/useUser'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { delay } from 'utils/delay'

export default function Home() {

  const { user, loading,error, isValidating } = useUser()
  // const auth = useAuth()
  const router = useRouter()
  // const [role, setRole] = useState("")

  // async function wewe(){
  //   const a = await auth.isLoggedIn('/get-profile')
  //   console.log("index", a)
  //   return a
  // }
  // console.log(user)
  // console.log(error)


  useEffect(() => {
    // delay(3000)
    if(!isValidating){

      if(user){
        // setRole(user.role.name)
        console.log("user", user)
        // console.log(user.data.role.access_code)
        // const role = user.data?.role.access_code
        // console.log("user ni")
        
        if(user.data){
          
          const code = user.data.role.access_code
          console.log(code)
          // delay(1500)
          if(code == ACCESS_CODE.ADMIN){
            router.push("/login/welcomeSU")
          }
          if(code == ACCESS_CODE.CLIENT){
            router.push(`/${userType.client}/uji`)
          }
          if(code == ACCESS_CODE.PERSONNEL){
            router.push(`/${userType.personnel}/uji`)
          }
          if(code == ACCESS_CODE.PERSONNEL_PEERS){
            router.push(`/${userType.personnel}/uji`)
          }
  
          if(code == ACCESS_CODE.KEPALA_LAB_UJI){
            router.push(`/${userType.management}/summary`)
          }
          if(code == ACCESS_CODE.KEPALA_LAB_KAL){
            router.push(`/${userType.management}/summary`)
          }
          if(code == ACCESS_CODE.MANAGEMENT_KAL){
            router.push(`/${userType.management}/summary`)
          }
          if(code == ACCESS_CODE.MANAGEMENT_UJI){
            router.push(`/${userType.management}/summary`)
          }
        }
        
        
      }
      if(error && !user){
        router.replace("/login")
      }
    }

  }, [user,error, isValidating])

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
      
      {/* {user && 
      <h1>RENDERED</h1>
      } */}
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
