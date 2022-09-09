export default function BapValidationSchema(yup) {
  return (
    yup.object({
        generator_serial_number: yup.string().required("Harap diisi"),
        tube_container_serial_number: yup.string().required("Harap diisi"),
        insertion_tube_serial_number: yup.string().required("Harap diisi"),
        remarks: yup.string().required("Harap diisi"),
        bap: yup
        .mixed()
        .nullable()
        .required("Harap masukkan berita acara fisik")
        ,
    })
  )
}
