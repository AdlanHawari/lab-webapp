export const MENU_ITEM = {
    UJI :{
        id: "uji",
        title:"Uji",
        path:"/uji",
        submenu: {
            PERMOHONAN: {
                id:"permohonanUji",
                title: "Permohonan Uji",
                path: "/permohonan-uji"
            },
            MANAJEMEN: {
                id: "manajemenUji",
                title: "Manajemen Uji",
                path: "/manajemen-uji"
            }
        }
    },
    LOG: {
        id:"log",
        title:"Log",
        path:"/log"

    },
    SUMMARY: {
        id: "summary",
        title: "Summary",
        path: "/summary"
    },
    ARSIP: {
        id: "arsip",
        title: "Arsip Dokumen",
        path: "/arsip-dokumen"

    }, 
    MANAJEMEN_USER: {
        id: "manajemenUser",
        title: "Manajemen User",
        path: "/manajemen-user" 
    },
     
    MANAJEMEN_ALAT_UKUR: {
        id: "manajemenAlatUkur",
        title: "Manajemen Alat Ukur",
        path: "/manajemen-alat-ukur",
        submenu: {
            DASHBOARD: {
                id: "dashboard",
                title: "Dashboard",
                path: "/dashboard-alat-ukur"
            },
            LOG: {
                id: "logAlatUkur",
                title: "Log Alat Ukur",
                path: "/log-alat-ukur"
            }
        } 
    },

}