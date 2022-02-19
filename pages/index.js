import { MyLink } from 'components/general/MyLink'
import Button from 'components/small/button_fixed/Button'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    
      
    <div className="flex flex-col space-y-6 h-screen w-screen justify-center items-center">

      {/* <div className=""> */}
        <h1>
          This page will perform token checking.  
        </h1>
        <h2>
          Currently, this page is still under construction.
        </h2>
        <div className="grid grid-flow-row gap-y-6 w-96">
          <MyLink href="/login">
            <Button type="primary_default" className="hover:bg-primary-darken20">
              Login
            </Button>
          </MyLink>
          <MyLink href="/client/log">
            <Button type="secondary_neutral" className="hover:bg-grey-400 hover:text-white">
              Client
            </Button>
          </MyLink>
          <MyLink href="/manajemen/log">
            <Button type="secondary_default" className="hover:bg-primary-darken20 hover:text-white">
              Manajemen
            </Button>
          </MyLink>
          <MyLink href="/personel/log">
            <Button type="secondary_disabled" className="bg-secondary text-white hover:bg-secondary-darker20">
              Personel
            </Button>
          </MyLink>
        {/* </div> */}

      </div>

   </div>
  )
}
