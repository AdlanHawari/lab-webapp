export default function EditUserValidationSchema(yup) {
  return (
    yup.object({
      password: yup.string(),
        password_confirmation: yup.string().when('password', {
          is: (password) => password.length >0 ,
          then: yup.string()
          .required('Password konfirmasi tidak cocok')
          .oneOf([yup.ref("password"), null], 'Password konfirmasi tidak cocok'),
        })
    })
  )
}
