const log = {
    date: "16 Agustus 2021",
    name: "Aulia Rizky H",
    roles: "Penguji",
    notification_type: "Pengujian Dijadwalkan",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}

const generateLog = () => {
    let data = []
    for(let i = 0; i<9; i++){
        data.push(log)
    }
    return data
}

export const clientLogs = generateLog()  