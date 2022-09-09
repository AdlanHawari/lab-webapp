import classNames from "classnames";
import { usePageContext } from "hooks/context/pagination/PageContext"
import Button from "../button_fixed/Button"

export default function Pagination() {
  const {currentPage, setCurrentPage,lastPage } = usePageContext();
  const pageCount = 5;
  const pageIndex = Math.ceil(currentPage/5) - 1
  let pageNum = new Array(pageCount)
  let value;
  for(let i=0;i<pageCount;i++){
    value = pageIndex*pageCount + i + 1
    if(value<=lastPage){
      pageNum[i] = value
    }
  }
  return (
    <div className="pb-20 pt-10 flex justify-end">
      <ul className="flex space-x-4 items-center">
        {currentPage>pageCount &&
          <li>
              <Button
              className="w-20 py-1"
              buttonStyle={currentPage>1?"primary_default" : "primary_disabled"} 
              type="button"
              disabled={currentPage>1? false:true}
              onClick={()=>setCurrentPage(currentPage-1)}>
              Previous
            </Button>
          </li>
        }
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
        <li>
            <Button
              className="w-16 py-1"
              buttonStyle={currentPage<lastPage?"primary_default" : "primary_disabled"} 
              type="button"
              disabled={currentPage<lastPage? false:true}
              onClick={()=>setCurrentPage(currentPage+1)}>
              Next
            </Button>
        </li>
      </ul>
    </div>
  )
}