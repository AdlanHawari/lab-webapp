const log = {
    test_date: "16 Agustus 2021",
    nomor_dokumen: "041/RU-UK/SIP/06/2021",
    nama_instansi: "RS Sardjito Yogyakarta",
    xray_data: "X-Ray Stasioner 200 mA - SMEW XG 211",
    nama_penguji: "Aulia Rizky A",
    jenis_uji: "Uji Kesesuaian",
}

const generateLog = () => {
    let data = []
    for(let i = 0; i<9; i++){
        data.push(log)
    }
    return data
}

export const arsipData = generateLog()  