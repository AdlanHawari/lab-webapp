import classNames from 'classnames'
import { subPageManajemenUji } from 'constants/SubmenuManajemenUji'
import { useTitleContext } from 'hooks/TitleContext';
import React from 'react'

export default function ManajemenSubMenuButton() {
    const [,,subTitle,setSubtitle] = useTitleContext();
  return (
    <div className="flex">
    {subPageManajemenUji.map((item,index)=>(
        <button key={index} className={classNames(
            "button-base border border-primary",
            item==subTitle?
            " bg-primary text-white":
            " bg-white text-primary",
            index>0?
            "rounded-r-xl":
            "rounded-l-xl"
        )}
        onClick={()=>setSubtitle(item)}
        disabled={item==subTitle}>
            <div className="px-5 py-2.5">
                {item}
            </div>
        </button>
    ))}
    </div>
  )
}