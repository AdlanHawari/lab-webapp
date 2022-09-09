import classNames from 'classnames'
import QuickFilterButton from 'components/small/button_small/QuickFilterButton'
import Title1 from 'components/small/typography/Title1'
import TitleSmall from 'components/small/typography/TitleSmall'
import { useStatusFilterContext } from 'hooks/context/filter-status/StatusContext'
import React from 'react'

export default function StatusFilter({
    filter, 
    space, 
    titleSpace,
    onClick
}) {
    const {statusFilter, setStatusFilter}= useStatusFilterContext();
  return (
    <div className={classNames('flex items-center ',
    titleSpace ? titleSpace : "space-x-3"
    )}>
        <Title1>
            Status
        </Title1>
        <div className={classNames("flex",
        space ? space : "space-x-1"
        )}>
            {filter.map((item,index)=>(
                <QuickFilterButton key={index} 
                className={classNames(
                    statusFilter==item.status?
                    "bg-primary-lighten10 border-primary-darken10":
                    "bg-grey-50 border-grey-300"
                    )
                }
                onClick={()=> {
                    setStatusFilter(item.status)
                }}>
                    <TitleSmall className={classNames(
                        statusFilter==item.status?
                        "text-primary-darken10":
                        "text-grey-700"
                        )
                    }
                    >
                        {item.title}
                    </TitleSmall>
                </QuickFilterButton>
            ))}
        </div>
    </div>
  )
}