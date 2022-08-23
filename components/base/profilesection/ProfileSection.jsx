import BigCard from 'components/big/BigCard'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import { profile } from 'constants/Profile'
import useUser from 'hooks/fetcher/auth/useUser'
import React, { useEffect } from 'react'

export default function ProfileSection() {

  const { user, loading,error,mutate } = useUser()
  // console.log("data",user.data)
  // useEffect(() => {
  //   if(!user){
  //     mutate()
  //   }
  // })
  

  return (
   

    <BigCard className="border-2 border-solid border-cardStrokes shadow-lg">
      <div className="grid grid-flow-col grid-cols-2 ">
        <ul className="space-y-8">
            {profile.map((item,index)=> (
              <li key={index}>
                <Body1 className="text-black-400">{item}</Body1>
              </li>
            ))}
        </ul>

          {!loading&&
          user &&
            <ul className="space-y-8 ">
            <li>
              <Body2 className="text-black-400">
                {user.data.name}
              </Body2>
            </li>
            <li>
              <Body2 className="text-black-400">
                {user.data.institution.name}
              </Body2>
            </li>
            <li>
              <Body2 className="text-black-400">
                {user.data.role.name}
              </Body2>
            </li>
            <li>
              {user.data.phone?
                <Body2 className="text-black-400">
                  {user.data.phone}
                
                </Body2>
                :
                <div className="">
                  <Body2 className="text-black-400">
                    -
                  </Body2>
                </div>
              }
            </li>
            <li>
              <Body2 className="text-black-400">
                {user.data.email}
              </Body2>
            </li>
          </ul>
          }
      </div>
    </BigCard>

  )
}
