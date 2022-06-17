function FormPermohononanUjiValidationSchema(yup){
    return(
        yup.object({
            test_type: yup.string().required("Required"),
            type: yup.string().required("Required"),
            brand: yup.string().required("Required"),
            name: yup.string().required("Required"),
            quantity: yup
                        .number("nomor")
                        .min(1,"Minimal 1")
                        .required("Required")
                        .positive("oi")
                        .integer("wew")
                        .typeError('Required'),
        })
    )

}

export default FormPermohononanUjiValidationSchema