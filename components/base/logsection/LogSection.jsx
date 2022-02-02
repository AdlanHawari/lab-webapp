import React from 'react';
import DateFilter from '../filter/DateFilter';
import LogTable from './LogTable';

export default function LogSection({data,children}) {
  return (
    <div className="space-y-6">
      <div className="w-48">

        <DateFilter/>
      </div>
      <LogTable data={data}/>
    </div>
  )
}