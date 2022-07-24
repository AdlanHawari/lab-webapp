import { ACCESS_CODE } from "./Access_Code";

export const USER_ROLE = [
    {
        id: 1,
        name: "Super Admin",
        access_code: ACCESS_CODE.ADMIN
    },
    {
        id: 2,
        name: "Client",
        access_code: ACCESS_CODE.CLIENT
    },
    {
        id: 3,
        name: "Personnel",
        access_code: ACCESS_CODE.PERSONNEL
    },
    {
        id: 4,
        name: "Management - Uji Kesesuaian",
        access_code:ACCESS_CODE.MANAGEMENT_UJI
    },
    {
        id: 5,
        name: "Management - Kalibrasi",
        access_code:ACCESS_CODE.MANAGEMENT_KAL
    },
    {
        id: 6,
        name: "Kepala Lab",
        access_code:ACCESS_CODE.KEPALA_LAB
    }
]