import Button from "components/small/button_fixed/Button";
import ButtonSmall from "components/small/button_small/ButtonSmall";
import Table1 from "components/small/typography/Table1";
import Table2 from "components/small/typography/Table2";
import { manajemenUjiTableHead } from "constants/table/RowTitle";
import DetailUjiModalPersonel from "components/big/personel/DetailUjiModalPersonel";
import {useEffect, useState} from 'react';
import DetailModal from "components/big/DetailModal";
import { manajemenUjiStatus, permohonanUjiStatus } from "constants/filter-status/ManajemenUjiStatus";
import { useManajemenUjiContext } from "hooks/context/manajemen-uji/ManajemenUjiContext";
import { useDetailUji } from "hooks/fetcher/detail-uji/useDetailUji";
import DateFormatter from "utils/DateFormatter";
import Section1 from "components/big/detail-section/Section1";
import Section2 from "components/big/detail-section/Section2";
import SectionSchedule from "components/big/detail-section/SectionSchedule";
import FormModal from "components/big/FormModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import FormPemilihanJadwalPenguji from "components/big/manajemen/manajemen-uji/FormPemilihanJadwalPenguji";
import { form_dokumen_penugasan_id, form_input_regis_balis, form_pemilihan_jadwal_penguji_id } from "constants/FormUtils";
import { PersonnelProvider } from "hooks/fetcher/personnel/usePersonnelFetcher";
import FormDokumenPenugasan from "components/big/manajemen/manajemen-uji/FormDokumenPenugasan";
import FormInputTanggalRegisBalis from "components/big/manajemen/manajemen-uji/FormInputTanggalRegisBalis";
import SectionFee from "components/big/detail-section/SectionFee";

export default function ManajemenujiTable({data, mutate}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [selected, setSelected] = useState()
    const [dataSelected, setDataSelected] = useState({})
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);
    const {confirmTestApp} = useDetailUji()
    const {readable} = DateFormatter()
    const {
        pemilihanJadwalPopUp,
        setPemilihanJadwalPopUp,
        dokumenPenugasanPopUp,
        setDokumenPenugasanPopUp,
        tanggalRegisBalisPopUp,
        setTanggalRegisBalisPopUp
    } = useManajemenUjiContext()


    useEffect(() => {
        if(reqSent){
            setSubmitState(false)
            setPemilihanJadwalPopUp(false)
            setDokumenPenugasanPopUp(false)
            setTanggalRegisBalisPopUp(false)
            setreqSent(false)
            mutate()
        }
      
    
    }, [reqSent])

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
                            {item.xray_data}
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
        // <DetailUjiModalPersonel isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}/>
        <DetailModal 
          title="Detail Uji" 
          isOpen={isDetailOpen} 
          setIsOpen={setIsDetailOpen}
          status={manajemenUjiStatus}
          current_status={dataSelected.status}
          data={dataSelected}
          buttonSide={
            <>
            {dataSelected.status==5 &&
                <Button
                buttonStyle="primary_default"
                onClick={
                    ()=>{setPemilihanJadwalPopUp(true)}
                }
                >
                    Pemilihan Jadwal &amp; Penguji
                </Button>
            }

            {dataSelected.status>5 &&
                <div className="block space-y-4">
                    {dataSelected.status==6 &&
                    <>
                        <Button
                        buttonStyle="primary_default"
                        onClick={()=> setDokumenPenugasanPopUp(true)}
                        >
                            Dokumen Penugasan
                        </Button>
                        <Button
                        // buttonStyle="primary_default"
                        className="bg-secondary text-white"
                        // onClick={}
                        >
                            Ubah Jadwal &amp; Penguji
                        </Button>
                    </>
                    }

                    {dataSelected.status==7 &&
                    <>
                        <Button
                            buttonStyle="primary_default"
                            onClick={()=> setTanggalRegisBalisPopUp(true)}
                        >
                            Input Tanggal Registrasi Balis
                        </Button>
                        
                        <Button
                            buttonStyle="secondary_default"
                        >
                            Unduh Berita Acara Pekerjaan
                        </Button>
                    </>

                    }

                    {dataSelected.status == 8 &&
                    <>
                        <Button
                        buttonStyle="primary_default"
                        // onClick={}
                        >
                            Unduh Laporan Uji
                        </Button>
                        <Button
                        // buttonStyle="primary_default"
                        className="bg-secondary text-white"
                        // onClick={}
                        >
                            Konfirmasi Laporan Uji
                        </Button>
                        <Button
                            buttonStyle="secondary_default"
                        >
                            Ubah Laporan Uji
                        </Button>
                        <Button
                            buttonStyle="secondary_default"
                        >
                            Unduh Berita Acara Pekerjaan
                        </Button>
                    </>
                    }

                    {dataSelected.status == 9 &&
                    <>
                        <Button
                        buttonStyle="primary_default"
                        // onClick={}
                        >
                            Isi No. Registrasi Bapeten
                        </Button>
                        <Button
                        // buttonStyle="primary_default"
                        className="bg-secondary text-white"
                        // onClick={}
                        >
                            Edit Sertifikasi LUK
                        </Button>
                        <Button
                            buttonStyle="primary_default"
                        >
                            Unduh Laporan Uji
                        </Button>
                        <Button
                            buttonStyle="secondary_default"
                        >
                            Unduh Berita Acara Pekerjaan
                        </Button>
                    </>
                    }
                </div>

            }

            </>
          }
          >
            <Section1 data={dataSelected} />

            <Section2 data={dataSelected}/>

            <SectionSchedule data={dataSelected}/>

            <SectionFee data={dataSelected} cost_detail={dataSelected.cost_detail} current_status={dataSelected.status}/>

          </DetailModal>
      }

      {pemilihanJadwalPopUp && 
      <FormModal
        title="Pemilihan Jadwal &amp; Penguji"
        bgColor="primary"
        isOpen={pemilihanJadwalPopUp}
        setIsOpen={setPemilihanJadwalPopUp}
        buttonSide={<>
         <Button 
                className="bg-primary" 
                buttonStyle={submitState?"primary_disabled":"primary_default"}
                type="submit"                 
                disabled={submitState? true:false}
                form={form_pemilihan_jadwal_penguji_id}
                >
                  { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Konfirmasi Jadwal dan Personil
                </Button>

        </>}
      >
        <PersonnelProvider>
            <FormPemilihanJadwalPenguji
            id={form_pemilihan_jadwal_penguji_id}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            reqSent={reqSent}
            setreqSent={setreqSent}
            />
        </PersonnelProvider>
      </FormModal>
      }

      {dokumenPenugasanPopUp &&
        <FormModal  
        title="Dokumen Penugasan"
        bgColor="primary"
        isOpen={dokumenPenugasanPopUp}
        setIsOpen={setDokumenPenugasanPopUp}
        buttonSide={
        <>
            <Button 
            className="bg-primary" 
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            type="submit"                 
            disabled={submitState? true:false}
            form={form_dokumen_penugasan_id}
            >
                  { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Konfirmasi Jadwal dan Personil
            </Button>
        

        </>
        }
        >
            <FormDokumenPenugasan
                id={form_dokumen_penugasan_id}
                data={dataSelected}
                submitState={submitState}
                setSubmitState={setSubmitState}
                reqSent={reqSent}
                setreqSent={setreqSent}
            />
        
        </FormModal>
      }
      {tanggalRegisBalisPopUp &&
        <FormModal
        title="Input Tanggal Registrasi Balis"
        bgColor="primary"
        isOpen={tanggalRegisBalisPopUp}
        setIsOpen={setTanggalRegisBalisPopUp}
        buttonSide={
        <>
            <Button 
            className="bg-primary" 
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            type="submit"                 
            disabled={submitState? true:false}
            form={form_input_regis_balis}
            >
                  { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Konfirm Tanggal Registrasi
            </Button>

        </>
        }
        >
            <FormInputTanggalRegisBalis
            id={form_input_regis_balis}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            reqSent={reqSent}
            setreqSent={setreqSent}
            />
            
        </FormModal>
      }

      </>
  )
}
