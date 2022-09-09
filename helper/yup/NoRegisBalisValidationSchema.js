export default function NoRegisBalisValidationSchema(yup) {
  return (
    yup.object({
        bapeten_no: yup.string().required("Harap diisi")
    })
  )
}
