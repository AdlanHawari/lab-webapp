import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Section1 from 'components/big/detail-section/Section1'
import Section2 from 'components/big/detail-section/Section2'
import SectionFee from 'components/big/detail-section/SectionFee'
import DetailModal from 'components/big/DetailModal'
import FormCancelUji from 'components/big/FormCancelUji'
import FormModal from 'components/big/FormModal'
import FormBuatPenawaranUji from 'components/big/manajemen/permohonan-uji/FormBuatPenawaranUji'
import FormEditPenawaranUji from 'components/big/manajemen/permohonan-uji/FormEditPenawaranUji'
import FormKonfirmPembayaranUji from 'components/big/manajemen/permohonan-uji/FormKonfirmPembayaranUji'
import Button from 'components/small/button_fixed/Button'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { ACCESS_CODE } from 'constants/Access_Code'
import { DOCTYPE } from 'constants/DocType'
import { permohonanUjiStatus } from 'constants/filter-status/ManajemenUjiStatus'
import { form_batal_permohonan_uji_id, form_buat_penawaran_uji_id } from 'constants/FormUtils'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import { permohonanUjiTableHead } from 'constants/table/RowTitle'
import { useManajemenPermohonanUjiContext } from 'hooks/context/permohonan-uji/PermohonanUjiContext'
import useUser from 'hooks/fetcher/auth/useUser'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import {useEffect, useState} from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function PermohonanUjiTable({data, mutate}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const dateFormatter = DateFormatter()
    const [dataSelected, setDataSelected] = useState({})
    const [permission_KA_LAB, setPermission_KA_LAB] = useState(false)
    const {
        buatPenawaranPopUp, 
        setBuatPenawaranPopUp,
        konfirmPembayaranPopUp, 
        setKonfirmPembayaranPopUp,
        cancelUjiPopUp, 
        setCancelUjiPopUp,
        editPenawaranPopUp, 
        setEditPenawaranPopUp
    } = useManajemenPermohonanUjiContext()
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);
    const {confirmTestApp} = useDetailUji()
    const {user} = useUser()

    useEffect(()=> {
        if(reqSent){
          setSubmitState(false)
          setBuatPenawaranPopUp(false)
          setKonfirmPembayaranPopUp(false) 
          setCancelUjiPopUp(false)
          setEditPenawaranPopUp(false)
          setreqSent(false)
          mutate()
        }
      }, [reqSent])

      useEffect(() => {
        if(user.data.role.access_code == ACCESS_CODE.ADMIN || user.data.role.access_code == ACCESS_CODE.KEPALA_LAB_KAL || user.data.role.access_code == ACCESS_CODE.KEPALA_LAB_UJI){
            setPermission_KA_LAB(true)
        }
      }, [user])
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
                            {item.tools[0].tool.type} - {item.tools[0].tool_type} 
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                        {item.test_type==jenisPekerjaan[0]?item.tools[0].tool.brand:item.tools[0].tool_brand}
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
                        <div className="text-xs font-bold text-primary-darken10 underline underline-offset-2 leading-normal">
                            {item.documents.map((file,index)=>{
                                if(file.type==DOCTYPE.INVOICE){
                                    console.log("nama file",file.file_name)
                                    return file.file_name
                                }
                                return ""
                            })}
                        </div>
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
        <DetailModal 
          title="Detail Permohonan" 
          isOpen={isDetailOpen} 
          setIsOpen={setIsDetailOpen}
          status={permohonanUjiStatus}
          current_status={dataSelected.status}
          data={dataSelected}
          setCancelPopUp={setCancelUjiPopUp}
          buttonSide = {
          <>
            {
            dataSelected.status<3 && 
                dataSelected.status <2 ?
                    permission_KA_LAB &&
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
                     onClick={
                        ()=> setEditPenawaranPopUp(true)
                    }
                    >
                    Ubah Penawaran
                    </Button>
            }
            {dataSelected.status == 4 && permission_KA_LAB &&
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
        {editPenawaranPopUp &&
            <FormModal
            title="Ubah Penawaran"
            bgColor="primary"
            isOpen={editPenawaranPopUp}
            setIsOpen={setEditPenawaranPopUp}
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
                        Ubah Penawaran
                </Button>
            </>}
            >
                <FormEditPenawaranUji 
                id={form_buat_penawaran_uji_id}
                data={dataSelected}
                submitState={submitState}
                setSubmitState={setSubmitState}
                reqSent={reqSent}
                setreqSent={setreqSent}
                />
            </FormModal>
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
        {cancelUjiPopUp && 
        <FormModal
        title="Batalkan Permohonan"
        bgColor="error"
        isOpen={cancelUjiPopUp}
        setIsOpen={setCancelUjiPopUp}
        buttonSide={
            <Button
            className="bg-error"
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            type="submit"                 
            disabled={submitState? true:false}
            form={form_batal_permohonan_uji_id}
            >
                Batalkan Permohonan
            </Button>
        }
        >
            <FormCancelUji
            id={form_batal_permohonan_uji_id}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            setreqSent={setreqSent}
            />
        </FormModal>
    }
    </>
  )
}