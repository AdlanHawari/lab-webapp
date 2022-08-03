export default function FormPemilihanJadwalPengujiValidationSchema(yup){
    return(
        yup.object({
            test_date: yup.string().required("Harap masukkan jadwal pengujian"),
            tester_user_id: yup
            .number("Harap pilih penguji")
            .positive("Harap pilih penguji")
            .integer("Harap pilih penguji")
            .typeError("Harap pilih penguji")
            .required("Harap pilih penguji")
        })
    )
}