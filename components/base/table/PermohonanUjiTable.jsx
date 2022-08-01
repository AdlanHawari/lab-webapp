import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Section1 from 'components/big/detail-section/Section1'
import Section2 from 'components/big/detail-section/Section2'
import SectionFee from 'components/big/detail-section/SectionFee'
import DetailModal from 'components/big/DetailModal'
import FormModal from 'components/big/FormModal'
import FormBuatPenawaranUji from 'components/big/manajemen/permohonan-uji/FormBuatPenawaranUji'
import FormKonfirmPembayaranUji from 'components/big/manajemen/permohonan-uji/FormKonfirmPembayaranUji'
import Button from 'components/small/button_fixed/Button'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { permohonanUjiStatus } from 'constants/filter-status/ManajemenUjiStatus'
import { form_buat_penawaran_uji_id } from 'constants/FormUtils'
import { permohonanUjiTableHead } from 'constants/table/RowTitle'
import { useManajemenPermohonanUjiContext } from 'hooks/context/permohonan-uji/PermohonanUjiContext'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import { usePermohonanUjiManajemenFetcher } from 'hooks/fetcher/permohonan-uji/usePermohonanUjiFetcher'
import usePermohonanUji from 'hooks/fetcher/usePermohonanUji'
import {useEffect, useState} from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function PermohonanUjiTable({data, mutate}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const dateFormatter = DateFormatter()
    const [dataSelected, setDataSelected] = useState({})
    const {
        buatPenawaranPopUp, 
        setBuatPenawaranPopUp,
        konfirmPembayaranPopUp, 
        setKonfirmPembayaranPopUp
    } = useManajemenPermohonanUjiContext()
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);

    const {confirmTestApp} = useDetailUji()

    // useEffect(() => {
    //   console.log("popUp changed")
    
    // }, [buatPenawaranPopUp])

    // const {mutate} = usePermohonanUji(
    //       startDateFilter,
    //       endDateFilter,
    //       currentPage,
    //       statusFilter
    
    //     )

    useEffect(()=> {
        console.log("reqsent", reqSent)
        if(reqSent){
          setSubmitState(false)
          setBuatPenawaranPopUp(false)
          setKonfirmPembayaranPopUp(false)
          setreqSent(false)
          mutate()
        }
      }, [reqSent])
    
    
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
                dataSelected.status <4 &&
                    <Button 
                    buttonStyle="primary_default"
                    //  onClick={
                    //     ()=> setPersPenawaranOpen(true)
                    // }
                    >
                    Ubah Penawaran
                    </Button>
                
            }
            {dataSelected.status == 4 &&
                <Button 
                buttonStyle="primary_default"
                onClick={
                    ()=> setKonfirmPembayaranPopUp(true)
                }
                >
                    Konfirmasi Pembayaran
                </Button>
            }
          </>
          }
          >
            <Section1 data={dataSelected}/>

            <Section2 data={dataSelected}/>

            {dataSelected.status>2 &&
                <>
                    <SectionFee data={dataSelected} cost_detail={dataSelected.cost_detail} current_status={dataSelected.status}/>
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
                    
                    type="submit" 
                    
                    
                    disabled={submitState? true:false}
                    form={form_buat_penawaran_uji_id}
                    
                    >
                    { submitState &&
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    }
                        Kirim Penawaran
                </Button>
            </>}
            >
                <FormBuatPenawaranUji 
                id={form_buat_penawaran_uji_id}
                data={dataSelected}
                submitState={submitState}
                setSubmitState={setSubmitState}
                reqSent={reqSent}
                setreqSent={setreqSent}
                
                />

            </FormModal>

        }

        {konfirmPembayaranPopUp &&
        <FormModal
            title="Konfirmasi Pembayaran"
            bgColor="primary"
            isOpen={konfirmPembayaranPopUp}
            setIsOpen={setKonfirmPembayaranPopUp}
            buttonSide={
                <Button 
                    className="bg-primary" 
                    buttonStyle={submitState?"primary_disabled":"primary_default"}
                    type="button" 
                    disabled={submitState? true:false}
                    onClick={async ()=> {
                        setSubmitState(true)
                        const resp = await confirmTestApp(dataSelected.id)
                        if(resp.header.response_code == 200){
                            setSubmitState(false)
                            setreqSent(true)
                        }
                    }}
                    >
                    { submitState &&
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    }
                        Konfirmasi Pembayaran
                </Button>
            }
        >
            <FormKonfirmPembayaranUji
                data={dataSelected}
            />

        </FormModal>

        }
    </>
  )
}
