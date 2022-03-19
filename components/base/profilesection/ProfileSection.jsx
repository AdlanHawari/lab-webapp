import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import BigCard from "components/big/BigCard";
import Button from "components/small/button_fixed/Button";
import Input from "components/small/input/Input";
import Body1 from "components/small/typography/Body1";
import Body2 from "components/small/typography/Body2";
import { profile } from "constants/Profile";
import { user } from "constants/test_objects/user";
import { useEffect, useRef, useState } from "react";
import MenuItem from "../sidemenu/MenuItem";

export default function ProfileSection() {

  const [passwordVal, setPasswordVal] = useState(user[user.length-1].data);
  const [change, setChange] = useState(false);
  const [show, setShow] = useState(false);

  const reqFocus = useRef();

  function PosEnd(end) {
    var len = end.value.length;
      
    // Mostly for Web Browsers
    if (end.setSelectionRange) {
        end.focus();
        end.setSelectionRange(len, len);
    } else if (end.createTextRange) {
        var t = end.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}

  function clicked(){
    setShow(true)
    setChange(!change)
    // reqFocus.current.focus()
    PosEnd(password)
    
  }
  
  // useEffect(() => {
  //     console.log(reqFocus)
  //     // if(reqFocus){
  //     //   PosEnd(mantab)
  //     // }
      

  // }, [reqFocus]);
  

  return(
      <BigCard className="border-1 border-solid border-cardStrokes drop-shadow">
        <div className="grid grid-flow-col grid-cols-2 ">
          <ul className="space-y-8">
            {profile.map((item,index)=> (
              <li key={index}>
              <Body1 className="text-black-400">{item}</Body1>
              </li>
            ))}
          </ul>
        

          <ul className="space-y-8 ">
            {user.map((item,index)=> (
              <li key={index}>
                {index == user.length - 1 ?
                  <div className="flex space-x-8">
                    <div className="relative">
                    <input 
                      ref={reqFocus}
                      type={
                        show ?
                        "text" : "password"
                      }
                      className= {
                          (classNames
                              (
                                "form-input w-80 p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300",
                                change ? "bg-white text-black-500" : " bg-grey-100 focus:ring-0 focus:outline-none text-grey-500" 
                              
                              )
                          )
                      }
                      name={item.type} id={item.type} value={passwordVal}
                      onChange={(e) => setPasswordVal(e.target.value)}
                      readOnly={!change}
                      required 
                    />
                      {/* <Input
                      ref={reqFocus}
                      type={
                        show ?
                        "text" : "password"
                      }
                      className={classNames(
                        "w-80",
                        change ? "bg-white" : " bg-grey-100 focus:ring-0 focus:outline-none " 
                      )}
                      state={password}
                      setState={setPassword}
                      readOnly={!change}
                      /> */}
                      <div className="absolute inset-y-0 right-0 pr-4">
                        {show ?
                        <EyeOffIcon className="h-full w-6 text-grey-500 cursor-pointer" aria-hidden="true" onClick={()=>setShow(false)}/>
                        :
                        <EyeIcon className="h-full w-6 text-grey-500 cursor-pointer" aria-hidden="true" onClick={()=>setShow(true)}/>
                        }

                      </div>
                      
                    {/* <Input
                      type="text"
                      className="w-80"
                      state={password}
                      setState={setPassword}
                      readOnly={!change}
                      > */}
                    </div>
                    <div className="flex">
                      <Button buttonStyle="primary_default" className="px-5" 
                      // onClick={
                      //   () => { setChange(!change)}
                      // }
                      onClick={
                        // () => setChange(!change)

                        // (e) => console.log(item.type)
                        clicked
                        // ()=>{
                        // reqFocus.current.focus()
                        // setChange(!change)
                        // }
                        }
                        >
                        <div className="button-base">
                          {change?
                          `Simpan Password`
                          :
                          `Ganti Pasword`
                          }
                        </div>
                      </Button>
                    </div>
                  </div>
                  :
                  
                  <Body2 className="text-black-400">{item.data}</Body2>
                }
              </li>


            ))}
            

          </ul>

        </div>
      </BigCard>
      // <h1>
      //     This is Profile
      // </h1>
  )
}
