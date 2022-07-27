export default function FormPraUjiValidationSchema(yup) {
  return (
    yup.object({
        permit_holder: yup.string().required("Harap diisi"),
        ppr_no: yup.string().required("Harap diisi"),
        tool_info: yup.array(yup.object({
              manufactured: yup.string().required("Harap diisi"),
              control_panel_serial_no: yup.string().required("Harap diisi"),
              tube_container_serial_no: yup.string().required("Harap diisi"),
        }))
        
    })
  )
}
