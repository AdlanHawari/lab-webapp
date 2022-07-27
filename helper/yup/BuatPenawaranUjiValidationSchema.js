function BuatPenawaranUjiValidationSchema(yup){
    return(
        yup.object({
            invoice_no: yup.string().required("Masukkan nomor surat"),
            cost_offered: yup
                            .number("Harap masukkan nominal dengan benar")
                            .positive("Harap masukkan nominal dengan benar")
                            .integer("Harap masukkan nominal dengan benar")
                            .typeError("Harap masukkan nominal dengan benar")
                            .required("Harap masukkan nominal dengan benar")
        })
    )
}

export default BuatPenawaranUjiValidationSchema