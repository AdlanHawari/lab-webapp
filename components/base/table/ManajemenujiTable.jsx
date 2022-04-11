import Button from "components/small/button_fixed/Button";
import ButtonSmall from "components/small/button_small/ButtonSmall";
import Table1 from "components/small/typography/Table1";
import Table2 from "components/small/typography/Table2";
import { manajemenUjiTableHead } from "constants/table/RowTitle";
import DetailUjiModalPersonel from "components/big/personel/DetailUjiModalPersonel";
import {useState} from 'react';
import DetailModal from "components/big/DetailModal";
import { manajemenUjiStatus, permohonanUjiStatus } from "constants/filter-status/ManajemenUjiStatus";

export default function ManajemenujiTable({data}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [selected, setSelected] = useState()
  return (
      <>
    <table className="bg-primary-lighten10 min-w-full shadow-lg rounded-lg">
        <thead >
          <tr>
            {manajemenUjiTableHead.map((rowTitle,index)=>(
              <th key={index} scope="col" className="w-24 py-2 px-4 align-top">
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
                <tr key={index} className={
                    selected == index &&
                    "bg-warning-light"
                }
                onClick={()=>setSelected(index)}
                >
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
                        <ButtonSmall
                        onClick={()=>setIsDetailOpen(true)}>
                            Lihat Detail
                        </ButtonSmall>
                    </td>
                </tr>
            ))}
          
        </tbody>

      </table>
      {isDetailOpen &&
        // <DetailUjiModalPersonel isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}/>
        <DetailModal 
          title="Detail Uji" 
          isOpen={isDetailOpen} 
          setIsOpen={setIsDetailOpen}
          status={permohonanUjiStatus}
          current_status={2}
        //   status={manajemenUjiStatus}
          >

          </DetailModal>
      }

      </>
  )
}
