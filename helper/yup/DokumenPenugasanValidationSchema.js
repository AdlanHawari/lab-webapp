export default function DokumenPenugasanValidationSchema(yup) {
  return (
    yup.object({
        accommodation : yup
            .mixed()
            .nullable()
            .required("Harap masukkan NPWP")
            ,
        transportation : yup
            .mixed()
            .nullable()
            .required("Harap masukkan NPWP")
            ,
        test_documentation: yup
            .mixed()
            .nullable()
            .required("Harap masukkan NPWP")
            ,
        
    })
    
  )
}
