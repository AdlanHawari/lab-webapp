import {useEffect} from 'react'

export default function Try() {

    async function handleFetch(){
        const response = wewe()
        console.log( response)
    }

    async function wewe(){
        var requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDk5NjY0MjgsInVzZXJfaWQiOjF9.w7pH8WRvKqekiP-pJXoaKhNHJuIvdgHQYygJvwZZou4`,
                
            },
            // redirect: 'follow'
          };
          try{
              const req = await fetch("http://api.play1.musagreen.com/get-profile", requestOptions)
            //   console.log("req", req)
              const res = await req.json()
              console.log("res", res)
              return res

          }catch(e){
              console.log("error",e)
            return e
          }
    }

    

  return (
    <div>
        <button className='p-5 bg-secondary'
        onClick={()=>handleFetch()}>
            fetch
        </button>
    </div>
  )
}
