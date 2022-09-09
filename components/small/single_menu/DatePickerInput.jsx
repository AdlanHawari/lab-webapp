import { CalendarIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { format } from 'date-fns'
import React, { forwardRef, useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import DateFormatter from 'utils/DateFormatter'
import Button from '../button_fixed/Button'
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
            setRemoveState(false)
        }
    }, [selectedDate, removeState])

  return (
    <ReactDatePicker
    selected={selectedDate}
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
    renderCustomHeader={({
      date,
      decreaseMonth,
      increaseMonth,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled,
    }) => (
        <div className="flex items-center justify-between px-2 py-2">
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
        </div>
        )}
    >
      <div className=" mx-auto w-full py-4">
            <Button
            className="bg-error py-3 text-white"
            onClick={() => {
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
    selectedDate,
    dateFormatter},
    { value, onClick }, ref) => (
  <button
    onClick={()=>{
        setOpen(true)
      }
      }
    ref={ref}
    type="button"
    className='inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary'
      >
      <div className="flex w-full items-center justify-between">
        <div className={classNames(
            "input-med text-left w-full",
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