import Button from "components/small/button_fixed/Button";
import ButtonSmall from "components/small/button_small/ButtonSmall";
import Table1 from "components/small/typography/Table1";
import Table2 from "components/small/typography/Table2";
import { manajemenUjiTableHead } from "constants/table/RowTitle";
import {useEffect, useState} from 'react';
import DetailModal from "components/big/DetailModal";
import { manajemenUjiStatus } from "constants/filter-status/ManajemenUjiStatus";
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
import { form_batal_permohonan_uji_id, form_dokumen_penugasan_id, form_edit_sertif_luk_id, form_input_regis_balis, form_input_regis_bapeten_id, form_laporan_hasil_uji_id, form_pemilihan_jadwal_penguji_id } from "constants/FormUtils";
import { PersonnelProvider } from "hooks/fetcher/personnel/usePersonnelFetcher";
import FormDokumenPenugasan from "components/big/manajemen/manajemen-uji/FormDokumenPenugasan";
import FormInputTanggalRegisBalis from "components/big/manajemen/manajemen-uji/FormInputTanggalRegisBalis";
import SectionFee from "components/big/detail-section/SectionFee";
import classNames from "classnames";
import HMinus from "utils/HMinus";
import FormKonfirmLaporanUji from "components/big/manajemen/manajemen-uji/FormKonfirmLaporanUji";
import { useKonfirmLaporanUjiContext } from "hooks/context/manajemen-uji/KonfirmLaporanUjiContext";
import FormRegisBapeten from "components/big/manajemen/manajemen-uji/FormRegisBapeten";
import FormEditSertifLuk from "components/big/manajemen/manajemen-uji/FormEditSertifLuk";
import XRayDetector from "utils/XRayDetector";
import { SingleFileDownloader, ZipFileDownloader } from 'utils/FileDownloader'
import { DOCTYPE } from "constants/DocType";
import FormCancelUji from "components/big/FormCancelUji";
import FormEditJadwalPenguji from "components/big/manajemen/manajemen-uji/FormEditJadwalPenguji";
import FormEditLaporanHasilUji from "components/big/manajemen/manajemen-uji/FormEditLaporanHasilUji";
import useUser from "hooks/fetcher/auth/useUser";
import { ACCESS_CODE } from "constants/Access_Code";

export default function ManajemenujiTable({data, mutate}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [selected, setSelected] = useState()
    const [dataSelected, setDataSelected] = useState({})
    const [isAssignmentExist, setIsAssignmentExist] = useState(false)
    const [submitState, setSubmitState] = useState(false)
    const [testFileName, setTestFileName] = useState("")
    const [reqSent, setreqSent] = useState(false);
    const {confirmTestApp, downloadDoc, downloadZipFile} = useDetailUji()
    const {readable} = DateFormatter()
    const {user} = useUser()
    const [permission_KA_LAB, setPermission_KA_LAB] = useState(false)
    const {
        pemilihanJadwalPopUp,
        setPemilihanJadwalPopUp,
        dokumenPenugasanPopUp,
        setDokumenPenugasanPopUp,
        tanggalRegisBalisPopUp,
        setTanggalRegisBalisPopUp,
        konfirmLaporanUjiPopUp,
        setKonfirmLaporanUjiPopUp,
        regisBapetenPopUp, 
        setRegisBapetenPopUp,
        sertifLukPopUp, 
        setSertifLukPopUp,
        ubahLaporanUjiPopUp, 
        setUbahLaporanUjiPopUp,
        cancelUjiPopUp, 
        setCancelUjiPopUp,
        editJadwalPopUp, 
        setEditJadwalPopUp
    } = useManajemenUjiContext()
    const {
        terimaPopUp,
        setTerimaPopUp,
        tolakPopUp,
        setTolakPopUp
    } = useKonfirmLaporanUjiContext()

    useEffect(() => {
        if(reqSent){
            setSubmitState(false)
            setPemilihanJadwalPopUp(false)
            setDokumenPenugasanPopUp(false)
            setTanggalRegisBalisPopUp(false)
            setKonfirmLaporanUjiPopUp(false)
            setSertifLukPopUp(false)
            setRegisBapetenPopUp(false)
            setUbahLaporanUjiPopUp(false)
            setCancelUjiPopUp(false)
            setreqSent(false)
            setEditJadwalPopUp(false)
            mutate()
        }
    }, [reqSent])

    useEffect(() => {
        setIsAssignmentExist(false)
        dataSelected.documents?.map((item)=>{
            if(item.type==DOCTYPE.TEST_REPORT){
                setTestFileName(item.file_name)
            }
            if(item.group=="assignment"){
                setIsAssignmentExist(true)
            }
        })
    }, [dataSelected])

    useEffect(() => {
          if(user.data.role.access_code == ACCESS_CODE.ADMIN || user.data.role.access_code == ACCESS_CODE.KEPALA_LAB_KAL || user.data.role.access_code == ACCESS_CODE.KEPALA_LAB_UJI){
              setPermission_KA_LAB(true)
          }
        }, [user])

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
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-table-divider">
            {data.map((item,index)=>(
                <tr key={index} className={classNames(
                    selected == index &&"bg-warning-light"
                )}
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
                            {XRayDetector(item.tools[0].tool.type)}
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
                            "-"}
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
          status={manajemenUjiStatus}
          current_status={dataSelected.status}
          data={dataSelected}
          setCancelPopUp= {setCancelUjiPopUp}
          buttonSide=
          {
            <div className="block space-y-4">
            {dataSelected.status <=5 ? 
                <Button
                buttonStyle="primary_default"
                onClick={
                    ()=>{setPemilihanJadwalPopUp(true)}
                }
                >
                    Pemilihan Jadwal &amp; Penguji
                </Button>
            :
            dataSelected.status <=6 ? 
            <>
                <Button
                buttonStyle="primary_default"
                onClick={
                    ()=> setDokumenPenugasanPopUp(true)
                }
                >
                    Dokumen Penugasan
                </Button>
                <Button
                className="bg-secondary text-white"
                onClick={()=> setEditJadwalPopUp(true)}
                >
                    Ubah Jadwal &amp; Penguji
                </Button>
            </>  
            :
            <>
                {dataSelected.status <=7 ?
                    <Button
                    buttonStyle={dataSelected.balis_registration_date? "primary_disabled" :"primary_default"}
                    onClick={()=> setTanggalRegisBalisPopUp(true)}
                    disabled={dataSelected.balis_registration_date? true:false}
                    >
                        Input Tanggal Registrasi Balis
                    </Button>
                    :
                    <>
                        {dataSelected.status==9 &&
                        permission_KA_LAB &&
                            <>
                                <Button
                                buttonStyle="primary_default"
                                onClick={()=> setRegisBapetenPopUp(true)}
                                >
                                    Isi No. Registrasi Bapeten
                                </Button>
                                <Button
                                className="bg-secondary text-white"
                                onClick={()=> setSertifLukPopUp(true)}
                                >
                                    Edit Sertifikasi LUK
                                </Button>
                            </>
                        }
                        {dataSelected.status==100 &&
                            permission_KA_LAB &&
                            <Button
                            className="bg-secondary text-white"
                            onClick={()=> SingleFileDownloader(downloadDoc, dataSelected.id, DOCTYPE.CERTIFICATE, `SIP_CERT_${dataSelected.doc_number}`)}
                            >
                                Cetak Sertifikasi LUK
                            </Button>
                        }
                        <Button
                        buttonStyle="primary_default"
                        onClick={()=> ZipFileDownloader(downloadZipFile, dataSelected.id, `${dataSelected.doc_number}-report.zip`,DOCTYPE.DOCGROUP.REPORT)}
                        >
                            Unduh Laporan Uji
                        </Button>
                        {dataSelected.status==8 &&
                        permission_KA_LAB &&
                        <>
                            <Button
                            className="bg-secondary text-white"
                            onClick={()=> setKonfirmLaporanUjiPopUp(true)}
                            >
                                Konfirmasi Laporan Uji
                            </Button>
                            <Button
                                buttonStyle="secondary_default"
                                onClick={()=> setUbahLaporanUjiPopUp(true)}
                            >
                                Ubah Laporan Uji
                            </Button>
                        </>
                        }
                    </>
                }
                <Button
                    buttonStyle="secondary_default"
                    onClick={()=> SingleFileDownloader(downloadDoc, dataSelected.id, DOCTYPE.BAP, `SIP_BAP_${dataSelected.doc_number}`)}
                >
                    Unduh Berita Acara Pekerjaan
                </Button>
                </>
            }
            </div>
          }
          >
            <Section1 data={dataSelected} />
            <Section2 data={dataSelected}/>
            <SectionSchedule data={dataSelected}/>
            {dataSelected.cost_detail.cost!=0 &&
                <SectionFee data={dataSelected} cost_detail={dataSelected.cost_detail} current_status={dataSelected.status}/>
            }
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
        <div className="block space-y-3">
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
                  Simpan Dokumen
            </Button>
            <Button
            className="bg-secondary text-white" 
            onClick={()=>{
                ZipFileDownloader(downloadZipFile, dataSelected.id, `${dataSelected.doc_number}-assignment.zip`, DOCTYPE.DOCGROUP.ASSIGNMENT)
            }}
            >
                Cetak Surat Tugas
            </Button>
        </div>
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
      {editJadwalPopUp&&
        <FormModal
        title="Ubah Jadwal &amp; Penguji"
        bgColor="primary"
        isOpen={editJadwalPopUp}
        setIsOpen={setEditJadwalPopUp}
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
                    Ubah Jadwal dan Personil
                </Button>
        </>}
        >
            <PersonnelProvider>
                <FormEditJadwalPenguji
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
      {konfirmLaporanUjiPopUp&&
        <FormModal
        title="Konfirmasi Laporan Uji"
        bgColor="primary"
        isOpen={konfirmLaporanUjiPopUp}
        setIsOpen={setKonfirmLaporanUjiPopUp}
        buttonSide={
        <div className="block space-y-3">
            <Button 
            buttonStyle="primary_default"
            type="button"  
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
        }> 
            <FormKonfirmLaporanUji
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            reqSent={reqSent}
            setreqSent={setreqSent}
            />
        </FormModal>
      }
      {regisBapetenPopUp &&
        <FormModal
        title="Isi No Registrasi BAPETEN"
        bgColor="primary"
        isOpen={regisBapetenPopUp}
        setIsOpen={setRegisBapetenPopUp}
        buttonSide={
            <Button 
            className="bg-primary" 
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            type="submit"                 
            disabled={submitState? true:false}
            form={form_input_regis_bapeten_id}
            >
                  { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Konfirm Nomor Registrasi
            </Button>
        }
        >
            <FormRegisBapeten
            id={form_input_regis_bapeten_id}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            reqSent={reqSent}
            setreqSent={setreqSent}
            />
        </FormModal> 
      }
      {sertifLukPopUp &&
        <FormModal
        title="Cetak Sertifikat LUK"
        bgColor="primary"
        isOpen={sertifLukPopUp}
        setIsOpen={setSertifLukPopUp}
        buttonSide={
            <Button 
            className="bg-primary" 
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            type="submit"                 
            disabled={submitState? true:false}
            form={form_edit_sertif_luk_id}
            >
                  { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Simpan Sertifikat
            </Button>
        }
        >
            <FormEditSertifLuk
                id={form_edit_sertif_luk_id}
                data={dataSelected}
                setSubmitState={setSubmitState}
                setreqSent={setreqSent}
            />
        </FormModal> 
      }
      {ubahLaporanUjiPopUp && 
        <FormModal
        title="Ubah Laporan Hasil Uji"
        bgColor="primary"
        isOpen={ubahLaporanUjiPopUp}
        setIsOpen={setUbahLaporanUjiPopUp}
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
                Ubah Laporan Uji
            </Button></>}
        >
            <FormEditLaporanHasilUji
             id={form_laporan_hasil_uji_id}
             data={dataSelected}
             submitState={submitState}
             setSubmitState={setSubmitState}
             setreqSent={setreqSent}
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