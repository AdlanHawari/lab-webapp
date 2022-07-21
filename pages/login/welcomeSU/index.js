import { MyLink } from "components/general/MyLink";
import Button from "components/small/button_fixed/Button";
import { userType } from "constants/UserType";

export default function WelcomeSUPage() {
  return (
    <div className="flex flex-col space-y-6 h-screen w-screen justify-center items-center">

      {/* <div className=""> */}
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
  )
}
