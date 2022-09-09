export default function EditUserValidationSchema(yup) {
  return (
    yup.object({
      email: yup.string().test(
        'empty-check', 
        'Harap diisi dengan email yang valid',
         (value)=> {
          if(value){
            const schema = yup.string().email()
            return schema.isValidSync(value)
          }
          return true
         }),
        phone_number: yup.string().test(
        'minimum char when not empty',
        "Harap isi dengan nomor Hp aktif",
        (value)=> {
          if(value){
            const schema = yup.string()
              .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                null
              )
              return schema.isValidSync(value)
          }
          return true
        }),
      password: yup.string(),
      password_confirmation: yup.string().when('password', {
        is: (password) => password != null ,
        then: yup.string()
        .required('Password konfirmasi tidak cocok').required("Harap diisi")
        .oneOf([yup.ref("password"), null], 'Password konfirmasi tidak cocok'),
      })
    })
  )
}
