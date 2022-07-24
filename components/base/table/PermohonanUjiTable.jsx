import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Section1 from 'components/big/detail-section/Section1'
import Section2 from 'components/big/detail-section/Section2'
import SectionFee from 'components/big/detail-section/SectionFee'
import DetailModal from 'components/big/DetailModal'
import FormModal from 'components/big/FormModal'
import FormBuatPenawaranUji from 'components/big/manajemen/permohonan-uji/FormBuatPenawaranUji'
import Button from 'components/small/button_fixed/Button'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { permohonanUjiStatus } from 'constants/filter-status/ManajemenUjiStatus'
import { permohonanUjiTableHead } from 'constants/table/RowTitle'
import { useManajemenPermohonanUjiContext } from 'hooks/context/permohonan-uji/PermohonanUjiContext'
import {useState} from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function PermohonanUjiTable({data}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const dateFormatter = DateFormatter()
    const [dataSelected, setDataSelected] = useState({})
    const {buatPenawaranPopUp, setBuatPenawaranPopUp} = useManajemenPermohonanUjiContext()
    const [submitState, setSubmitState] = useState(false)
    // console.log("data uji tabel", data)
  return (
    <>
        <table className='bg-primary-lighten10 min-w-full shadow-lg rounded-lg'>
            <thead>
                <tr className=''>
                    {permohonanUjiTableHead.map((rowTitle,index)=>(
                        <th key={index} scope="col" className=' w-48 px-4 py-2'>
                            <Table2 className={classNames(
                            "text-black-500 leading-normal",
                            index == permohonanUjiTableHead.length - 1 ? "text-center" : "text-left"
                        )}>
                            {rowTitle}  
                        </Table2>
                        </th>
                    ))}
                </tr>

            </thead>
            <tbody className='bg-white divide-y divide-table-divider'>
            {data.map((item,index)=>(
                <tr key={index} className="h-16 ">
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {dateFormatter.readable(item.created_at)}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.user.institution.name }
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4 ">
                        <Table1 className="text-black-500 leading-normal">
                            {item.tools[0].name} - {item.tools[0].type}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.tools[0].brand}
                        </Table1>
                        
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.test_type}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.status_detail.management_value}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                    {item.bukti_pembayaran &&
                        <div className="text-xs font-bold text-primary-darken10 underline underline-offset-2 leading-normal">
                            {item.bukti_pembayaran}
                        </div>
                    }
                    </td>
                    <td className="px-2">
                        <ButtonSmall
                        onClick={()=>{
                            setIsDetailOpen(true)
                            setDataSelected(item)
                            }}>
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
          title="Detail Permohonan" 
          isOpen={isDetailOpen} 
          setIsOpen={setIsDetailOpen}
          status={permohonanUjiStatus}
          current_status={dataSelected.status}
          data={dataSelected}
          //   status={manajemenUjiStatus}
          buttonSide = {
          <>
            {dataSelected.status<3 &&
                dataSelected.status <2 ?
                    <Button 
                    buttonStyle="primary_default"
                     onClick={
                        ()=> setBuatPenawaranPopUp(true)
                    }
                    >
                        Buat Penawaran
                    </Button>
                :
                    <Button 
                    buttonStyle="primary_default"
                    //  onClick={
                    //     ()=> setPersPenawaranOpen(true)
                    // }
                    >
                    Ubah Penawaran
                    </Button>
                
            }
          </>
          }
          >
            <Section1 data={dataSelected}/>

            <Section2 data={dataSelected}/>

            {dataSelected.status>2 &&
                <>
                    <SectionFee cost_detail={dataSelected.cost_detail} current_status={dataSelected.status}/>
                </>
            }

          </DetailModal>
        }

        {buatPenawaranPopUp &&
            <FormModal
            title="Buat Penawaran"
            bgColor="primary"
            isOpen={buatPenawaranPopUp}
            setIsOpen={setBuatPenawaranPopUp}
            buttonSide={<>
                <Button 
                    className="bg-primary" 
                    buttonStyle={submitState?"primary_disabled":"primary_default"}
                    // buttonStyle="primary_default"
                    // type="submit" 
                    type="button" 
                    disabled={submitState? true:false}
                    // form={}
                    // form="ujibaru"
                    >
                    { submitState &&
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    }
                        Kirim Penawaran
                </Button>
            </>}
            >
                <FormBuatPenawaranUji/>

            </FormModal>

        }
    </>
  )
}
