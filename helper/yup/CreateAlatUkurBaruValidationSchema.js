export default function CreateAlatUkurBaruValidationSchema(yup) {
  return (
    yup.object({
        test_type: yup.string().required("Harap diisi"),
        tool_type: yup.string().required("Harap diisi"),
        brand: yup.string().required("Harap diisi"),
        serial_id: yup.string().required("Harap diisi"),
    })
  )
}