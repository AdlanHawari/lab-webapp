import { LightningBoltIcon } from "@heroicons/react/outline";
import Title1 from "components/small/typography/Title1";
import { client_menu } from "constants/menu";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  // const [menu, setMenu] = useState('');
  // useEffect(() => {
  //   console.log("selected",menu)
  // }, [menu]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  
  return(
    <div className="block space-y-2">
        {/* <div className="flex w-48 h-11 py-2.5 pl-3.5 space-x-5 bg-sidebar-menu rounded-lg">
            <LightningBoltIcon className="w-4 text-grey-500 cursor-pointer" aria-hidden="true"/>
            <Title1>Uji</Title1>
        </div>
        <div className="flex items-center w-48 h-11 py-2.5 pl-3.5 space-x-5">
            
            <Title1 className="">Log</Title1>
        </div> */}
        {client_menu.map((item,index)=>(
          <MenuItem 
          key={index} 
          id={item.id} 
          type={item.id} 
          selected = {selectedIndex == index ? true : false}
          // className={selectedIndex == index ? "bg-sidebar-menu rounded-lg" : ""}
          onClick={
            (e)=>setSelectedIndex(index)
          }>
            {item.title}
          </MenuItem>
        ))}
        {/* <MenuItem id="uji" type="uji" onClick={(e)=>console.log("e",e.target.id)}/>
        <MenuItem id="log" type="log" onClick={(e)=>console.log("e",e.target.id)}/>
        <MenuItem id="apalah" type="apalah" onClick={(e)=>console.log("e",e.target.id)}/> */}
    </div>
  )
}
