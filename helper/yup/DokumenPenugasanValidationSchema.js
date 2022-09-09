export default function DokumenPenugasanValidationSchema(yup) {
  return (
    yup.object({
        accommodation : yup
            .mixed()
            .nullable()
            .required("Harap masukkan surat akomodasi")
            ,
        transportation : yup
            .mixed()
            .nullable()
            .required("Harap masukkan surat transportasi")
            ,
    })
  )
}