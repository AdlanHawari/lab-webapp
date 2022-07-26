export default function FormPraUjiValidationSchema(yup) {
  return (
    yup.object({
        permit_holder: yup.string().required("Harap diisi"),
        ppr_no: yup.string().required("Harap diisi"),
        tool_id: yup
            .number("nomor")
            .min(1,"Minimal 1")
            .required("Harap diisi")
            .positive("Harap isi dengan bilangan positif")
            .integer("Harap isi dengan benar")
            .typeError('Harap diisi'),
        manufactured: yup.string().required("Harap diisi"),
        control_panel_serial_no: yup.string().required("Harap diisi"),
        tube_container_serial_no: yup.string().required("Harap diisi"),
    })
  )
}
