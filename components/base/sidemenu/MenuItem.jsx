import { ArchiveIcon, DocumentTextIcon, LightningBoltIcon, PresentationChartLineIcon, UserGroupIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { MyLink } from "components/general/MyLink";
import Title1 from "components/small/typography/Title1";
import { MENU_ITEM } from "constants/MenuItemConst";

export default function MenuItem(props) {
    let { href,
        children,
        iconclassName,
        textclassName,
        bgclassName,
        type,
        onClick,
        ...rest 
    } = props
    return(
        <MyLink href={href} className={classNames(
                    "flex w-48 h-11 py-2.5 pl-3.5 space-x-5 ",
                    bgclassName
                    )}
                    onClick={onClick}>
         {type == MENU_ITEM.UJI.id &&
                <LightningBoltIcon className={classNames(
                    "w-8",
                    iconclassName
                )}
                aria-hidden="true"/>
            }
            {type == MENU_ITEM.LOG.id &&
                <DocumentTextIcon className={classNames(
                    "w-8",
                    iconclassName
                )}
                aria-hidden="true"/>
            }
            {type == MENU_ITEM.SUMMARY.id &&
                <PresentationChartLineIcon className={classNames(
                    "w-8",
                    iconclassName
                )}
                aria-hidden="true"/>
            }
            {type == MENU_ITEM.ARSIP.id &&
                <ArchiveIcon className={classNames(
                    "w-8",
                    iconclassName
                )}
                aria-hidden="true"/>
            }
            {type == MENU_ITEM.MANAJEMEN_USER.id &&
                <UserGroupIcon className={classNames(
                    "w-8",
                    iconclassName
                )}
                aria-hidden="true"/>
            }
            {type == MENU_ITEM.MANAJEMEN_ALAT_UKUR.id &&
                <UserGroupIcon className={classNames(
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
        </MyLink>
    )
}