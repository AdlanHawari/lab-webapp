import { CalendarIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { format } from 'date-fns'
import React, { forwardRef, useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import DateFormatter from 'utils/DateFormatter'
import Button from '../button_fixed/Button'
import Body1 from '../typography/Body1'
import Body3 from '../typography/Body3'
import Title3Med from '../typography/Title3Med'

export default function DatePickerInput({
    setFormikValue,
    id,
    name,
    placeholder,
    onBlur
}) {
    const [open, setOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)
    const dateFormatter = DateFormatter()
    const [removeState, setRemoveState] = useState(false)

    useEffect(() => {
        if(selectedDate){
            setOpen(false)
            setFormikValue(id, dateFormatter.filter(selectedDate))
        }
        if(removeState){
            // setSelectedDate(null)
            setRemoveState(false)
    
        }
    
      
    }, [selectedDate, removeState])
    

  return (
    <ReactDatePicker
    selected={selectedDate}
    // startDate={selectedDate}
    onChange={(update) => {
        setSelectedDate(update)
    }}
    open={open}
    onBlur={onBlur}
    id={id}
    name={name}
    onClickOutside={()=>setOpen(false)}
    nextMonthButtonLabel=">"
    previousMonthButtonLabel="<"
    popperClassName="react-datepicker-right"
    customInput={
    <DateInput
        open={open}
        setOpen={setOpen}
        selectedDate={selectedDate}
        dateFormatter={dateFormatter}
        placeholder={placeholder}
    />}
    // placeholderText={placeholder}
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
      {/* <div className=" mx-auto w-1/2 py-4"> */}
      <div className=" mx-auto w-full py-4">
            <Button 
            // buttonStyle="primary_default" 
            className="bg-error py-3 text-white"
            onClick={() => {
                // setStartDate(null)
                // setDateRange([null,null])
                setSelectedDate(null)
                setOpen(false)
                setRemoveState(true)
                }}>
                Remove Date
            </Button>
        </div>

    </ReactDatePicker>
  )
}

const DateInput = forwardRef(({
    
    setOpen, 
    placeholder,
    selectedDate,
    dateFormatter},
    { value, onClick }, ref) => (
  <button
  //   onClick={onClick}
    onClick={()=>{
        setOpen(true)
      //   onClick
      }
      }
    
    ref={ref}
    type="button"
    className='inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary'
      >
      <div className="flex w-full items-center justify-between">
        <div className={classNames(
            // "input-med bg-primary border-solid border border-x-0 border-grey-300 pl-1 focus:border-grey-300 focus:ring-0",
            "input-med text-left w-full",
            // value ? "text-black-500" : "text-grey-500"
            selectedDate ? "text-black-500" : "text-grey-500"
        )} 
        >

        {selectedDate ?
        dateFormatter.filter(selectedDate)
        :
        <Title3Med className="text-grey-500">
            Pilih Tanggal
        </Title3Med>
        }
            
        </div>
        <CalendarIcon className="h-full w-6 text-black-300 " aria-hidden="true"/>
         
             
          
      </div>
  </button>
  
))
DateInput.displayName = 'DateInput';

