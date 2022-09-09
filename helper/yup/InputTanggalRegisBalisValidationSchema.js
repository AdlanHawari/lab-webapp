export default function InputTanggalRegisBalisValidationSchema(yup) {
  return (
    yup.object({
        balis_date: yup.string().required("Harap diisi")
    })
  )
}
