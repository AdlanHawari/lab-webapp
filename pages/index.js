import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   <h1>
     this is dummy 
   </h1>
   <h2>
     Redirecting to login page
   </h2>
   <Link href="/login"> Login </Link>
   </>
  )
}
