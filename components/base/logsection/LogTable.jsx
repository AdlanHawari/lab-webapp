import { TrashIcon } from "@heroicons/react/outline"
import classNames from "classnames"

export default function LogTable({data}) {
    const tableHead = [
        "Tanggal",
        "Nama User",
        "Roles",
        "Tipe Notifikasi",
        "Pesan",
        "Pilihan"
    ]
  return(
    <table className="bg-primary-lighten10 min-w-full shadow-lg rounded-lg">
        <thead className=" ">
            <tr>
                {tableHead.map((rowTitle,index)=>(
                    <th key={index} scope="col" className={classNames(
                        "w-48 table-2 py-2 px-4 text-black-500",
                        index == tableHead.length - 1 ? "text-center" : "text-left"
                    )}
                    >
                        {rowTitle}  
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-table-divider">
            {data.map((item,index)=>(
                <tr key={index} className="h-16">
                    <td className="w-48 py-2 px-4 table-1 text-black-500">
                        {item.date}
                    </td>
                    <td className="w-48 py-2 px-4 table-1 text-black-500">
                        {item.name}
                    </td>
                    <td className="w-48 py-2 px-4 table-1 text-black-500">
                        {item.roles}
                    </td>
                    <td className="w-48 py-2 px-4 table-1 text-black-500">
                        {item.notification_type}
                    </td>
                    <td className="w-48 py-2 px-4 table-1 leading-4 text-black-500">
                        {item.message}
                    </td>
                    <td scope="col" className="" >
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center py-2 px-2 bg-error rounded-lg">
                                <TrashIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                            </div>
                        </div>
                        
                    </td>

                </tr>
                

            ))}


        </tbody>
    </table>
  )
}
