export default function BatalPermohonanUjiValidationSchema(yup) {
    return (
      yup.object({
          remarks: yup.string().required("Harap diisi"),
      })
    )
  }
  