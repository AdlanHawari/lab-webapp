import { LightningBoltIcon } from "@heroicons/react/outline";
import Title1 from "components/small/typography/Title1";
import { client_menu, management_menu } from "constants/menu";
import { useTitleContext } from "context/TitleContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuItem from "components/base/sidemenu/MenuItem";
import { useRouter } from "next/router";
import UrlSplitter from "utils/UrlSplitter";


export default function SideMenu() {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [title,setTitle] = useTitleContext();
  const router = useRouter();
  const splittedUrl = UrlSplitter(router.pathname)
  const user_type = splittedUrl[1];
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    if(user_type == "client"){
      setMenu(client_menu)
    }
    if(user_type == "manajemen"){
      setMenu(management_menu)
    }
    if(user_type == "personel"){
      setMenu(personel_menu)
    }
    // setMenu(client_menu)
  }, []);

  return(
    <div className="block space-y-2">
        { menu.length>0 &&
        menu.map((item,index)=>(

          <div key={index}>
            
            <MenuItem
            href={item.path}
            type={item.id}
            textclassName={router.pathname==item.path ? "text-black-500" : "text-black-300"}
            bgclassName={router.pathname==item.path && "bg-sidebar-menu rounded-lg"}
            iconclassName={router.pathname==item.path ? "text-primary" : "text-black-300"}
            onClick={()=>setTitle(item.title)}
            >
              {item.title}
            </MenuItem>
              
          </div>
        ))}
    </div>
  )
}
