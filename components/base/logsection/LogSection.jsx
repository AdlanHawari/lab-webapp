import Pagination from 'components/small/pagination/Pagination';
import { paginator } from 'constants/test_objects/paginator';
import React from 'react';
import DateFilter from '../filter/DateFilter';
import LogTable from '../table/LogTable';

export default function LogSection({data,children}) {
  return (
    <div className="space-y-6">
      <div className="w-48">

        <DateFilter/>
      </div>
      <LogTable data={data}/>
      <Pagination paginator={paginator}/>
    </div>
  )
}
