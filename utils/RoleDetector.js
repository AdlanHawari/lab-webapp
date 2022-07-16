import { ACCESS_CODE } from "constants/Access_Code";


const role_value = {
    client: "client_value",
    management: "management_value",
    personnel: "personnel_value"
}

export default function RoleDetector(access_code){
    if (access_code==ACCESS_CODE.ADMIN){
        return role_value.management
    }

    if (access_code==ACCESS_CODE.CLIENT){
        return role_value.client
    }

    if (access_code==ACCESS_CODE.PERSONNEL){
        return role_value.personnel
    }
    
    if (access_code==ACCESS_CODE.MANAGEMENT_UJI){
        return role_value.management
    }

    if (access_code==ACCESS_CODE.MANAGEMENT_KAL){
        return role_value.management
    }

    if (access_code==ACCESS_CODE.KEPALA_LAB){
        return role_value.management
    }
    

}