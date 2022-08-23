import { MyLink } from "components/general/MyLink";
import Button from "components/small/button_fixed/Button";
import { ACCESS_CODE } from "constants/Access_Code";
import { userType } from "constants/UserType";
import useUser from "hooks/fetcher/auth/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { delay } from "utils/delay";

export default function WelcomeSUPage() {
  const { user, loading,error, mutate } = useUser()
  const [render, setRender] = useState(false)
  const router = useRouter()
  useEffect(() => {
    console.log("entering superadmin")
    delay(2000)
    if(!loading){

      if(user){
        console.log("user", user)
        if(user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          setRender(true)
        }
      }
  
      if(error&& !user){
        console.log("error", error)
        router.replace("/")
      }
    }
    // else{
    //   router.replace("/")
    // }
  
  }, [user,error])

  return (
    <>
    {loading ?
    <div className="">

      <h3>Loading...</h3>
    </div>
    :
    render &&
    
    <div className="flex flex-col space-y-6 h-screen w-screen justify-center items-center">
        <h1>
          Welcome! 
        </h1>
        <h2>
          Super Admin
        </h2>
        <div className="grid grid-flow-row gap-y-6 w-96">
          <MyLink href={`/${userType.client}/uji`}>
            <Button buttonStyle="secondary_neutral" className="hover:bg-grey-400 hover:text-white">
              Client
            </Button>
          </MyLink>
          <MyLink href={`/${userType.management}/summary`}>
            <Button buttonStyle="secondary_default" className="hover:bg-primary-darken20 hover:text-white">
              Manajemen
            </Button>
          </MyLink>
          <MyLink href={`/${userType.personnel}/uji`}>
            <Button buttonStyle="secondary_disabled" className="bg-secondary text-white hover:bg-secondary-darker20">
              Personel
            </Button>
          </MyLink>
        {/* </div> */}

      </div>

   </div>
    }
   </>
  )
}
