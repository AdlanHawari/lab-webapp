import { forwardRef, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import ReactDatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/outline'
import classNames from "classnames";
import Button from 'components/small/button_fixed/Button'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext'
import DateFormatter from 'utils/DateFormatter'

export default function DateFilter() {
//   const [startDate, setStartDate] = useState(new Date())
//   const [startDate, setStartDate] = useState()
  const [open, setOpen] = useState(false)
//   const [endDate, setEndDate] = useState()
const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
//   const [dateState, setDateState] = useState("");
const {setStartDateFilter, setEndDateFilter}    = useDateFilterUjiContext();
const [removeState, setRemoveState] = useState(false)

const dateFormatter = DateFormatter()

useEffect(() => {
    console.log("end: ",endDate)
    if(open && endDate){
        setOpen(false)
        // console.log("start", DateFormatter(startDate))
        setStartDateFilter(dateFormatter.filter(startDate))
        setEndDateFilter(dateFormatter.filter(endDate))
    }
    if(removeState){
        setStartDateFilter("")
        setEndDateFilter("")
        setRemoveState(false)

    }
}, [dateRange, removeState])
// }, [endDate])
// useEffect(() => {
//     console.log("date: ",startDate? startDate.toString(): "null")
// }, [startDate])
//  const dateFilled = (update) => {
//      if(open && update[1]){

//      }
//  }

  return(
    <ReactDatePicker
        // selected={startDate}
        selectsRange={true}
        // onChange={(date) => setStartDate(date)}
        onChange={(update) => {
            setDateRange(update);
            // console.log("update",update)
            
            
          }}
        // selectsStart
        
        startDate={startDate}
        open={open}
        onClickOutside={()=>setOpen(false)}
        // onSelect={()=>setOpen(false)}
        on
        
        endDate={endDate}
        nextMonthButtonLabel=">"
        previousMonthButtonLabel="<"
        popperClassName="react-datepicker-left"
        customInput={<DateInput open={open} setOpen={setOpen} startDate={startDate} endDate={endDate} dateFormatter={dateFormatter}/>}
        renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
        }) => (
            <div className="flex items-center justify-between px-2 py-2">
                {/* <span className="text-lg text-grey-700">
                    {format(date, 'MMMM yyyy')}
                </span> */}

                {/* <div className="space-x-2"> */}
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                        type="button"
                        className={`
                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                            inline-flex p-1 text-sm font-medium text-grey-700 hover:bg-grey-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-secondary
                        `}
                    >
                        <ChevronLeftIcon className="w-5 h-5 text-grey-500" />
                    </button>

                    <h3 className="text-lg text-primary-darken10">
                        {format(date, 'MMMM yyyy')}
                    </h3>

                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                        type="button"
                        className={`
                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                            inline-flex p-1 text-sm font-medium text-grey-700 hover:bg-grey-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-secondary
                        `}
                    >
                        <ChevronRightIcon className="w-5 h-5 text-grey-600" />
                    </button>
                {/* </div> */}
            </div>
        )}
    >
        <div className=" mx-auto w-1/2 py-4">
            <Button 
            buttonStyle="primary_default" 
            className="bg-error py-1"
            onClick={() => {
                // setStartDate(null)
                setDateRange([null,null])
                setOpen(false)
                setRemoveState(true)
                }}>
                Remove Date
            </Button>
        </div>
    </ReactDatePicker>

  )
}

const DateInput = forwardRef(({open, setOpen,startDate, endDate, dateFormatter},{ value, onClick }, ref) => (
    <button
    //   onClick={onClick}
      onClick={()=>{
          setOpen(true)
        //   onClick
        }
        }
      
      ref={ref}
      type="button"
      className='inline-flex justify-start w-72 px-3 py-2 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary'
        >
        <div className="flex w-full items-center justify-between">
                <CalendarIcon className="h-full w-6 text-black-500 " aria-hidden="true"/>
           
            <div className={classNames(
                // "input-med bg-primary border-solid border border-x-0 border-grey-300 pl-1 focus:border-grey-300 focus:ring-0",
                "input-med text-left w-full pl-4",
                // value ? "text-black-500" : "text-grey-500"
                startDate && endDate ? "text-black-500" : "text-grey-500"
            )} 
            >
                {startDate && endDate ?        
                dateFormatter.filter(startDate) + " - " + dateFormatter.filter(endDate)
                : 
                "DD/MM/YYYY - DD/MM/YYYY"
                }
                
            </div>
                <ChevronDownIcon className="h-full w-4 text-black-500 " aria-hidden="true"/>
            
        </div>
    </button>
    
))
DateInput.displayName = 'DateInput';
