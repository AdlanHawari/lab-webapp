import { ACCESS_CODE } from 'constants/Access_Code'
import { userType } from 'constants/UserType'
import useUser from 'hooks/fetcher/auth/useUser'
import { useRouter } from 'next/router'
import {useEffect} from 'react'

export default function Home() {

  const { user, loading,error, isValidating } = useUser()
  
  const router = useRouter()

  useEffect(() => {
    
    if(!isValidating){

      if(user){
        console.log("user", user)
        if(user.data){
          const code = user.data.role.access_code
          console.log(code)
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


  return (
    <div className="">
      {loading &&
        <h1>LOADING</h1>
      }
    </div>
   
  )
}
