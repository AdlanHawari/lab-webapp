export default function CreateAlatUkurBaruValidationSchema(yup) {
  return (
    yup.object({
        tool_type: yup.string().required("Harap pilih alat"),
        brand: yup.string().required("Harap pilih alat"),
        serial_id: yup.string().required("Harap diisi"),
    })
  )
}
