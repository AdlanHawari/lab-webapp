import { DocumentTextIcon, LightningBoltIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Title1 from "components/small/typography/Title1";
import { MENU_ITEM } from "constants/menuItem";

export default function MenuItem({
    type,
    id,
    onClick,
    selected,
    children,
    className}) {
  return(
      <button 
      onClick={onClick}
      id={id}
      className={classNames(
          "flex items-center w-48 h-11 py-2.5 pl-3.5 space-x-5 ",
          selected && "bg-sidebar-menu rounded-lg"
          )}
          >
          {type == MENU_ITEM.UJI &&
          <>
            <LightningBoltIcon className={classNames(
                "w-4",
                selected ? "text-primary" : "text-black-300"

            )}
            aria-hidden="true"/>
            <Title1 className={classNames(
                selected ? "text-black-500" : "text-black-300"
            )}>
                {children}
            </Title1>
          </>
        }
        {type == MENU_ITEM.LOG &&
          <>
          <DocumentTextIcon className={classNames(
              "w-4",
              selected ? "text-primary" : "text-black-300"

          )}
          aria-hidden="true"/>
          <Title1 className={classNames(
              selected ? "text-black-500" : "text-black-300"
          )}>
              {children}
          </Title1>
        </>
        }

        {type == MENU_ITEM.SUMMARY &&
         <>
         <LightningBoltIcon className={classNames(
             "w-4",
             selected ? "text-primary" : "text-black-300"

         )}
         aria-hidden="true"/>
         <Title1 className={classNames(
             selected ? "text-black-500" : "text-black-300"
         )}>
             {children}
         </Title1>
       </>
        }

        {type == MENU_ITEM.ARSIP &&
          <>
          <LightningBoltIcon className={classNames(
              "w-4",
              selected ? "text-primary" : "text-black-300"

          )}
          aria-hidden="true"/>
          <Title1 className={classNames(
              selected ? "text-black-500" : "text-black-300"
          )}>
              {children}
          </Title1>
        </>
        }

        {type == MENU_ITEM.MANAJEMEN &&
          <>
          <LightningBoltIcon className={classNames(
              "w-4",
              selected ? "text-primary" : "text-black-300"

          )}
          aria-hidden="true"/>
          <Title1 className={classNames(
              selected ? "text-black-500" : "text-black-300"
          )}>
              {children}
          </Title1>
        </>
        }

      </button>
  )
}
