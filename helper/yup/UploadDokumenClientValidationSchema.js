export default function UploadDokumenClientValidationSchema(yup){
    return(
        yup.object({
            npwp: yup
                    .mixed()
                    .nullable()
                    .required("Harap masukkan NPWP")
                    ,
            invoice: yup
                    .mixed()
                    .nullable()
                    .required("Harap masukkan NPWP")
        })
    )
}