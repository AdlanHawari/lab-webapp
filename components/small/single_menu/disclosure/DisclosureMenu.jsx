import { Disclosure, Transition } from '@headlessui/react'
import { LightningBoltIcon, ServerIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { MyLink } from 'components/general/MyLink'
import Title1 from 'components/small/typography/Title1'
import { MENU_ITEM } from 'constants/MenuItemConst'
import { useTitleContext } from 'hooks/TitleContext'

export default function DisclosureMenu({iconclassName,
  type,
  children,
  textclassName,
  bgclassName,
  onClick,
  object,
  page
}) {

  const [title,setTitle] = useTitleContext();

  return (
    <Disclosure as="div" className="">
      {({open}) => (
      <>
        <Disclosure.Button className={classNames(
          "flex justify-between items-center w-48 h-11 py-2.5 pl-3.5 pr-4",
          bgclassName
          )}
          >
          <div className="flex items-center space-x-5">
          {type == MENU_ITEM.UJI.id ?
            <LightningBoltIcon className={classNames(
                            "w-8",
                            iconclassName
                        )}
                        aria-hidden="true"/>
            :
            <ServerIcon className={classNames(
                            "w-8",
                            iconclassName
                        )}
                        aria-hidden="true"/>
          }
            <Title1 className={classNames(
                textclassName
              )}>
                {children}
            </Title1>
          </div>
          <ChevronDownIcon className={classNames(
            "w-6 ",
            open && "transition duration-700 ease-in-out transform rotate-180",
            textclassName
            )} 
            aria-hidden="true"/>
        </Disclosure.Button>
        <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
          <Disclosure.Panel as='ul' static className={classNames(
            "pt-2 list-inside list-disc space-y-2",
            textclassName
          )}
          >
            {({close}) => (
              <>
              {object.map((item,index)=>(
                <li key={index} className={classNames(
                  "pl-10 h-11 py-2.5 ",
                  page == item.path && "bg-sidebar-submenu rounded-lg"
                )}
                >
                  <MyLink href={item.path} className="title-2-med" onClick={()=> {
                    close()
                    setTitle(item.title)
                    }}>
                    {item.title}
                  </MyLink>
                </li>
              ))}
              </>
            )}
          </Disclosure.Panel>
        </Transition>
      </>
      )}
    </Disclosure>
  )
}