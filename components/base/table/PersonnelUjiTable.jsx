import classNames from 'classnames'
import DetailModal from 'components/big/DetailModal'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { manajemenUjiTableHead } from 'constants/table/RowTitle'
import { personelUjiStatus } from 'constants/filter-status/PersonelUjiStatus'
import React, { useEffect, useState } from 'react'
import DateFormatter from 'utils/DateFormatter'
import Button from 'components/small/button_fixed/Button'
import Section1 from 'components/big/detail-section/Section1'
import Section2 from 'components/big/detail-section/Section2'
import SectionSchedule from 'components/big/detail-section/SectionSchedule'
import SectionFee from 'components/big/detail-section/SectionFee'
import { usePersonnelUjiContext } from 'hooks/context/personnel-uji/PersonnelUjiContext'
import FormModal from 'components/big/FormModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { form_bap_id, form_laporan_hasil_uji_id } from 'constants/FormUtils'
import FormBeritaAcaraPekerjaan from 'components/big/personnel/uji/FormBeritaAcaraPekerjaan'
import FormLaporanHasilUji from 'components/big/personnel/uji/FormLaporanHasilUji'
import useUser from 'hooks/fetcher/auth/useUser'
import { ACCESS_CODE } from 'constants/Access_Code'
import { useKonfirmLaporanUjiContext } from 'hooks/context/manajemen-uji/KonfirmLaporanUjiContext'
import FormKonfirmLaporanUji from 'components/big/manajemen/manajemen-uji/FormKonfirmLaporanUji'
import XRayDetector from 'utils/XRayDetector'
import HMinus from 'utils/HMinus'
import { DOCTYPE } from 'constants/DocType'
import { SingleFileDownloader, ZipFileDownloader } from 'utils/FileDownloader'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import ErrorModal from 'components/big/ErrorModal'

export default function PersonnelUjiTable({data, mutate}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [selected, setSelected] = useState()
  const [dataSelected, setDataSelected] = useState({})
  const [dokumenPenugasanState, setDokumenPenugasanState] = useState(false)
  const [emptyDokumenPenugasanState, setEmptyDokumenPenugasanState] = useState(false)
  const {readable} = DateFormatter()
  const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);

    const { user, loading,error } = useUser()

    const {downloadZipFile}= useDetailUji()

  const {
    beritaAcaraPopUp, 
    setBeritaAcaraPopUp,
    laporanUjiPopUp, 
    setLaporanUjiPopUp,
    konfirmlaporanUjiPopUp, 
    setKonfirmLaporanUjiPopUp
    } = usePersonnelUjiContext()

    const {
        terimaPopUp,
        setTerimaPopUp,
        tolakPopUp,
        setTolakPopUp
    } = useKonfirmLaporanUjiContext()


    useEffect(() => {
        if(reqSent){
            setSubmitState(false)
            setBeritaAcaraPopUp(false)
            setLaporanUjiPopUp(false)
            setKonfirmLaporanUjiPopUp(false)
            setDokumenPenugasanState(false)
            setreqSent(false)
            mutate()
        }
      
    
    }, [reqSent])

    function checkDokumenPenugasan(documents){
        documents.map(item => {
            if(item.group == DOCTYPE.DOCGROUP.ASSIGNMENT){
                setDokumenPenugasanState(true)
            }
        })

    }

    // useEffect(()=>{
    //     if(user){
    //         console.log("role",user.data.role.access_code)
    //     }
    // }, [user])
    useEffect(() => {
      
        if(dataSelected && dataSelected.documents){
            checkDokumenPenugasan(dataSelected.documents)
        }
    }, [dataSelected])

    useEffect(() => {
      
        console.log("dokpenstate", dokumenPenugasanState)
    }, [dokumenPenugasanState])
    
    
    


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
          <tr key={index} className={classNames(
            selected == index &&
            "bg-warning-light"
          )
        }
        onClick={()=>setSelected(index)}
        >
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
                  {item.user.institution.name}
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
              {item.user.institution.address}
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
              {XRayDetector(item.tools[0].name)}
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
                  {item.test_type}
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
                  {item.status_detail.management_value}
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
              {item.assignment_detail.tester.name &&
                  readable(item.assignment_detail.test_date)
              }
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
                  {item.assignment_detail.tester.name}
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
                {item.assignment_detail.tools_brought?
                    item.assignment_detail.tools_brought
                    :
                    "-"
                }
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
                {
                    HMinus(item.balis_registration_date)    
                }
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
                {
                    HMinus(item.balis_registration_date) =="-" ?
                    "-"
                    :
                    readable(item.balis_registration_date)
                }
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
              isinya apa
              </Table1>
          </td>
          <td className="max-w-24 p-4">
              <Table1 className="text-black-500 leading-normal">
              isinya apa
              </Table1>
          </td>
          <td className="">
              <ButtonSmall
              onClick={()=>{
                  setIsDetailOpen(true)
                  setDataSelected(item)
              }}
              >
                  Lihat Detail
              </ButtonSmall>
          </td>
        </tr>
      ))}
      </tbody>
    </table>


    {isDetailOpen && 

    <DetailModal
        title="Detail Uji"
        isOpen={isDetailOpen} 
        setIsOpen={setIsDetailOpen}
        status={personelUjiStatus}
        current_status={dataSelected.status}
        data={dataSelected}
        buttonSide={
            <>
            {dataSelected.status == 6 &&
            <div className="block space-y-4">
                <Button
                buttonStyle="primary_default"
                onClick={
                    dokumenPenugasanState ?
                    ()=>ZipFileDownloader(downloadZipFile, dataSelected.id, DOCTYPE.DOCGROUP.ASSIGNMENT, "Dokumen_Penugasan.zip")
                    :
                    ()=>setEmptyDokumenPenugasanState(true)


                }
                >
                    Unduh Dokumen Penugasan
                </Button>

                <Button
                className="bg-secondary text-white"
                onClick={()=> setBeritaAcaraPopUp(true)}
                >
                    Isi Berita Acara Pekerjaan
                </Button>

            </div>

            }

            {dataSelected.status == 7 && 
            <Button
            buttonStyle="primary_default"
            onClick={()=> setLaporanUjiPopUp(true)}>
                Isi Laporan Hasil Uji
            </Button>

            }

            {dataSelected.status>7 && dataSelected.status <50 && 
            <div className="block space-y-4">
                <Button
                buttonStyle="primary_default"
                >
                    Unduh Laporan Uji
                </Button>
                
                {dataSelected.status<10 &&
                <Button
                className="bg-secondary text-white"
                >
                    Ubah Laporan Uji
                </Button>
                }

                {dataSelected.status == 8 && user.data.role.access_code == ACCESS_CODE.ADMIN ? 

                <Button
                className="bg-secondary text-white"
                onClick={()=> setKonfirmLaporanUjiPopUp(true)}
                >
                    Konfirmasi Laporan Uji
                </Button>
                :
                dataSelected.status == 8 && user.data.role.access_code == ACCESS_CODE.PERSONNEL_PEERS &&
                <Button
                className="bg-secondary text-white"
                onClick={()=> setKonfirmLaporanUjiPopUp(true)}
                >
                    Konfirmasi Laporan Uji
                </Button>

            }

            </div>
            }
            </>
        }
    >

        <Section1 data={dataSelected} />

        <Section2 data={dataSelected}/>

        <SectionSchedule data={dataSelected}/>
        
        {/* <SectionFee data={dataSelected} cost_detail={dataSelected.cost_detail} current_status={dataSelected.status}/> */}

    </DetailModal>

    }

    {beritaAcaraPopUp && 
    <FormModal
    title="Berita Acara Pekerjaan"
    bgColor="primary"
    isOpen={beritaAcaraPopUp}
    setIsOpen={setBeritaAcaraPopUp}
    buttonSide={<>
        <Button 
        className="bg-primary" 
        buttonStyle={submitState?"primary_disabled":"primary_default"}
        type="submit"                 
        disabled={submitState? true:false}
        form={form_bap_id}
        >
            { submitState &&
            <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
            }
            Konfirmasi Berita Acara &amp; Selesaikan Uji
        </Button>
    </>}
    >
        <FormBeritaAcaraPekerjaan
            id={form_bap_id}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            reqSent={reqSent}
            setreqSent={setreqSent}
        />
    </FormModal>
    }

    {laporanUjiPopUp &&
        <FormModal
        title="Laporan Hasil Uji"
        bgColor="primary"
        isOpen={laporanUjiPopUp}
        setIsOpen={setLaporanUjiPopUp}
        buttonSide={<>
            <Button 
            className="bg-primary" 
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            type="submit"                 
            disabled={submitState? true:false}
            form={form_laporan_hasil_uji_id}
            >
                { submitState &&
                <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                }
                Upload Laporan Uji
            </Button>
        </>
    }>
        <FormLaporanHasilUji
            id={form_laporan_hasil_uji_id}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            setreqSent={setreqSent}
        />

    </FormModal>
    }

    {konfirmlaporanUjiPopUp && 
        <FormModal
        title="Konfirmasi Laporan Uji"
        bgColor="primary"
        isOpen={konfirmlaporanUjiPopUp}
        setIsOpen={setKonfirmLaporanUjiPopUp}
        buttonSide={
            <div className="block space-y-3">
            <Button 
            buttonStyle="primary_default"
            type="button"                 
            // form={}
            onClick={()=> setTerimaPopUp(true)}
            >
                  Setujui Laporan
            </Button>

            <Button
            className="bg-warning text-white"
            type="button" 
            onClick={()=> setTolakPopUp(true)}
            >
                Tolak Laporan
            </Button>
        

        </div>
        }
        >
            <FormKonfirmLaporanUji
             data={dataSelected}
             submitState={submitState}
             setSubmitState={setSubmitState}
             reqSent={reqSent}
             setreqSent={setreqSent}
             asPeers="true"
            />

        </FormModal>
    }
    {emptyDokumenPenugasanState &&
        <ErrorModal
        bgColor="warning"
        isOpen={emptyDokumenPenugasanState}
        setIsOpen={setEmptyDokumenPenugasanState}
        >
            <div className='block pb-10'>
                <h3 className='text-black-400'>Dokumen penugasan belum tersedia</h3>
            </div>

        </ErrorModal>
    }
    </>
  )
}
