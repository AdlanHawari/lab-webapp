export default function LaporanHasilUjiValidationSchema(yup) {
  return (
    yup.object({
        test_report: yup
          .mixed()
          .nullable()
          .required("Harap masukkan laporan hasil uji"),
        // additional_doc: yup
        //   .mixed()
        //   .nullable()
        //   .required("Harap masukkan dokumen tambahan")
        
    })
  )
}
