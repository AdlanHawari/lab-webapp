function FormPermohononanUjiValidationSchema(yup){
    return(
        yup.object({
            test_type: yup.string().required("Harap diisi"),
            tools: yup.array(yup.object({
                type: yup.string().required("Harap diisi"),
                brand: yup.string().required("Harap diisi"),
                tool_name: yup.string().required("Harap diisi"),
                serial: yup.string().required("Harap diisi"),
                quantity: yup
                            .number("nomor")
                            .min(1,"Minimal 1")
                            .required("Harap diisi")
                            .positive("Harap isi dengan bilangan positif")
                            .integer("Harap isi dengan benar")
                            .typeError('Harap diisi'),
            })).required("Harap isi minimal 1 alat")
        })
        // yup.object({
        //     test_type: yup.string().required("Harap diisi"),
        //     type: yup.string().required("Harap diisi"),
        //     brand: yup.string().required("Harap diisi"),
        //     tool_name: yup.string().required("Harap diisi"),
        //     quantity: yup
        //                 .number("nomor")
        //                 .min(1,"Minimal 1")
        //                 .required("Harap diisi")
        //                 .positive("Harap isi dengan bilangan positif")
        //                 .integer("Harap isi dengan benar")
        //                 .typeError('Harap diisi'),
        // })
    )

}

export default FormPermohononanUjiValidationSchema