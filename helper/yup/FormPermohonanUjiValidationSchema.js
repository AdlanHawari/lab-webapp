import { jenisPekerjaan } from "constants/JenisPekerjaan"

function FormPermohononanUjiValidationSchema(yup){
    return(
        yup.object({
            test_type: yup.string().required("Harap diisi"),
            tools: yup.array(yup.object({
                type: yup.string().required("Harap diisi"),
                brand: yup.string().required("Harap diisi"),
                tool_name: yup.string().required("Harap diisi"),
                serial: yup.string().when('test_type', {
                    is: (test_type) => test_type == jenisPekerjaan[0],
                    then: yup.string().required("Harap diisi"),
                }),
                quantity: yup
                            .number("nomor")
                            .min(1,"Minimal 1")
                            .required("Harap diisi")
                            .positive("Harap isi dengan bilangan positif")
                            .integer("Harap isi dengan benar")
                            .typeError('Harap diisi'),
            })).required("Harap isi minimal 1 alat")
        })
    )
}

export default FormPermohononanUjiValidationSchema