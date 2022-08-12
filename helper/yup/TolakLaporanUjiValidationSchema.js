export default function TolakLaporanUjiValidationSchema(yup) {
  return (
    yup.object({
        decline_remarks: yup.string().required("Harap diisi"),
    })
  )
}
