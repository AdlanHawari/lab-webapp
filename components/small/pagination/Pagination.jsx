import classNames from "classnames";
import { usePageContext } from "hooks/context/pagination/PageContext"
import { useEffect, useState } from "react"
import Button from "../button_fixed/Button"

export default function Pagination() {
  const {currentPage, setCurrentPage,lastPage } = usePageContext();

  
  const pageCount = 5;
  const totalPageIndex = Math.ceil(lastPage/pageCount);
  // console.log("total index",totalPageIndex)

  const pageIndex = Math.ceil(currentPage/5) - 1
  // console.log("page index",pageIndex)
  let pageNum = new Array(pageCount)
  let value;
  for(var i=0;i<pageCount;i++){
    value = pageIndex*pageCount + i + 1
    if(value<=lastPage){
      pageNum[i] = value
    }
  }
  // console.log(pageNum)
  

  return (
    <div className="pb-20 pt-10 flex justify-end">
      <ul className="flex space-x-4 items-center">
        {pageNum.map((item,index)=>(
          <li key={index} className={classNames(
            "button-base",
            currentPage==item?
              "text-black-900"
              :
              "text-grey-500"

            )}
            >
              <button type="button" 
              onClick={()=>setCurrentPage(item)}
              disabled={item!=lastPage? false:true}>
                {item}
              </button>
            </li>

        ))}
        {/* <li className="button-base text-black-900">1</li>
        <li className="button-base text-grey-500">2</li>
        <li className="button-base text-grey-500">3</li>
        <li className="button-base text-grey-500">4</li>
        <li className="button-base text-grey-500">5</li> */}
        
        <li>
            <Button 
              // className="bg-primary" 
              className="w-16 py-1"
              buttonStyle={currentPage<lastPage?"primary_default" : "primary_disabled"} 
              type="button"
              disabled={currentPage<lastPage? false:true}
              onClick={()=>setCurrentPage(currentPage+1)}>
              Next
            </Button>
        </li>
        {/* {currentPage<lastPage &&
        } */}
        
        
      </ul>
    </div>
  )
}
