export default function CreateInstValidationSchema(yup) {
  return (
    yup.object({
      institution_create: yup.object({
        name: yup.string().required("Harap diisi"),
        contact_name: yup.string().required("Harap diisi"),
        address: yup.string().required("Harap diisi"),
        email: yup.string().email("Harap diisi dengan email yg valid").required("Harap diisi"),
        phone_number: yup.string()
                    .required("Harap diisi")
                    .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Harap isi dengan nomor Hp aktif"
                    ),
        mobile_phone_number: yup.string()
                    .required("Harap diisi")
                    .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Harap isi dengan nomor Hp aktif"
                    )
      })
    })
  )
}
