import { client_menu, management_menu, personel_menu } from "constants/Menu";
import { useEffect, useState } from "react";
import MenuItem from "components/base/sidemenu/MenuItem";
import { useRouter } from "next/router";
import UrlSplitter from "utils/UrlSplitter";
import DisclosureMenu from "components/small/single_menu/disclosure/DisclosureMenu";
import { userType } from "constants/UserType";

export default function SideMenu() {
  const router = useRouter();
  const splittedUrl = UrlSplitter(router.pathname)
  const user_type = splittedUrl[1];
  const page = splittedUrl[2];
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if(user_type == userType.client){
      setMenu(client_menu)
    }
    if(user_type == userType.management){
      setMenu(management_menu)
    }
    if(user_type == userType.personnel){
      setMenu(personel_menu)
    }
  }, [user_type]);

  return(
    <div className="block space-y-2">
        { menu.length>0 &&
        menu.map((item,index)=>(
          <div key={index}>
            {item.submenu?
              <DisclosureMenu
              type={item.id}
              object={item.submenu}
              textclassName="text-black-300"
              page={router.pathname}
              bgclassName={page && page.includes(item.id) && "bg-sidebar-menu rounded-lg"}
              iconclassName={page && page.includes(item.id) ? "text-primary" : "text-black-300"}
              >
                {item.title}
              </DisclosureMenu> 
              :
              <MenuItem
                href={item.path}
                type={item.id}
                textclassName={router.pathname==item.path ? "text-black-500" : "text-black-300"}
                bgclassName={router.pathname==item.path && "bg-sidebar-menu rounded-lg"}
                iconclassName={router.pathname==item.path ? "text-primary" : "text-black-300"}
                >
                {item.title}
              </MenuItem>
          } 
          </div>
        ))}
    </div>
  )
}