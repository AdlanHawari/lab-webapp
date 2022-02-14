import { forwardRef, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import ReactDatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/outline'
import classNames from "classnames";
import Button from 'components/small/button_fixed/Button'

export default function DateFilter() {
//   const [startDate, setStartDate] = useState(new Date())
  const [startDate, setStartDate] = useState()
  const [open, setOpen] = useState(false)
//   const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1))
//   const [dateState, setDateState] = useState("");

//   useEffect(() => {
//     if (startDate > endDate) setStartDate(endDate)
// }, [endDate])

useEffect(() => {
    console.log("date: ",startDate? startDate.toString(): "null")
}, [startDate])

  return(
    <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        open={open}
        onClickOutside={()=>setOpen(false)}
        onSelect={()=>setOpen(false)}
        
        // endDate={endDate}
        nextMonthButtonLabel=">"
        previousMonthButtonLabel="<"
        popperClassName="react-datepicker-left"
        customInput={<DateInput open={open} setOpen={setOpen} date={startDate}/>}
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
            type="primary_default" 
            className="bg-error py-1"
            onClick={() => {
                setStartDate(null)
                setOpen(false)
                }}>
                Remove Date
            </Button>
        </div>
    </ReactDatePicker>

  )
}

const DateInput = forwardRef(({open, setOpen,date},{ value, onClick }, ref) => (
    <button
    //   onClick={onClick}
      onClick={()=>{
          setOpen(true)
        //   onClick
        }
        }
      
      ref={ref}
      type="button"
      className='inline-flex justify-start w-48 px-3 py-2 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary'
        >
        {/* {format(new Date(value), 'dd MMMM yyyy')} */}
        <div className="flex w-full items-center justify-between">
            {/* <label htmlFor="" className='border-solid border border-r-0 border-grey-300 rounded rounded-r-none px-2.5'> */}
            {/* <label htmlFor="" className=''> */}
                <CalendarIcon className="h-full w-6 text-black-500 " aria-hidden="true"/>
            {/* </label> */}
            {/* <input readOnly type="text" value={value ?
            format(new Date(value), 'dd/MM/yyyy') 
            : ""
            }
                placeholder='DD/MM/YYYY' className=""
                ref={ref}
                onClick={onClick}/> */}
            <div className={classNames(
                // "input-med bg-primary border-solid border border-x-0 border-grey-300 pl-1 focus:border-grey-300 focus:ring-0",
                "input-med text-left w-24",
                // value ? "text-black-500" : "text-grey-500"
                date ? "text-black-500" : "text-grey-500"
            )} 
            >
                {/* {value ?
                format(new Date(value), 'dd/MM/yyyy') 
                : "DD/MM/YYYY"} */}
                {date ?
                format(new Date(date), 'dd/MM/yyyy') 
                : "DD/MM/YYYY"}
            </div>
            {/* <label htmlFor="" className='bg-secondary border-solid border border-l-0 border-grey-300 rounded rounded-l-none'> */}
            {/* <label htmlFor="" className=''> */}
                <ChevronDownIcon className="h-full w-4 text-black-500 " aria-hidden="true"/>
            {/* </label> */}
        </div>
    </button>
    // <div className="relative">
    //     <div className="absolute inset-y-0 left-0 pl-4">
    //         <CalendarIcon className="h-full w-6 text-grey-500 cursor-pointer" aria-hidden="true"/>
    //     </div>
    //     <input type="password" placeholder='wewe' className="form-input w-80 rounded-xl text-xs border-solid border-2 border-grey-300"/>
    //     <div className="absolute inset-y-0 right-0 pr-4">
    //         <ChevronDownIcon className="h-full w-6 text-grey-500 cursor-pointer" aria-hidden="true"/>
    //     </div>
    // </div>
//    <button
//       onClick={onClick}
//       ref={ref}
//       type="button"
//       className='inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary'
//     >
//       {format(new Date(value), 'dd MMMM yyyy')}
//   </button>
))
DateInput.displayName = 'DateInput';
