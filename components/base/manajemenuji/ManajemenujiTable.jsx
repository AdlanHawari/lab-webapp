import Button from "components/small/button_fixed/Button";
import ButtonSmall from "components/small/button_small/ButtonSmall";
import Table1 from "components/small/typography/Table1";
import Table2 from "components/small/typography/Table2";
import { manajemenUjiTableHead } from "constants/table/RowTitle";

export default function ManajemenujiTable({data}) {
  return (
    <table className="bg-primary-lighten10 min-w-full shadow-lg rounded-lg">
        <thead className="">
          <tr>
            {manajemenUjiTableHead.map((rowTitle,index)=>(
              <th key={index} scope="col" className="py-2 px-4 align-top">
                <Table2 className="text-black-500 text-left leading-normal">
                    {rowTitle}  
                </Table2>

              </th>

            ))

            }
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-table-divider">
            {data.map((item,index)=>(
                <tr key={index} className="">
                     <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.nama_instansi}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.address_instansi}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.xray_data}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.jenis_uji}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.status}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.test_date}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.nama_penguji}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.alat_keluar}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.h_minus}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.last_submit}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.keterangan}
                        </Table1>
                    </td>
                    <td className="max-w-24 p-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.regist_date}
                        </Table1>
                    </td>
                    <td className="">
                        <ButtonSmall>
                            Lihat Detail
                        </ButtonSmall>
                    </td>
                </tr>
            ))}
          
        </tbody>

      </table>
  )
}
