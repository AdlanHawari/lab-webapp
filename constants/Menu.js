import { MENU_ITEM } from "./MenuItemConst"
import { userType } from "./UserType"

export const client_menu = [
    {
        id:MENU_ITEM.UJI.id,
        title:MENU_ITEM.UJI.title,
        path:`/${userType.client}`+MENU_ITEM.UJI.path
    },
    {
        id:MENU_ITEM.LOG.id,
        title:MENU_ITEM.LOG.title,
        path:`/${userType.client}`+MENU_ITEM.LOG.path
    }
]

export const management_menu = [
    {
        id:MENU_ITEM.SUMMARY.id,
        title:MENU_ITEM.SUMMARY.title,
        path:`/${userType.management}`+MENU_ITEM.SUMMARY.path
    },
    {
        id:MENU_ITEM.UJI.id,
        title:MENU_ITEM.UJI.title,
        path:`/${userType.management}`+MENU_ITEM.UJI,
        submenu:[
            {
                id:MENU_ITEM.UJI.submenu.PERMOHONAN.id,
                title:MENU_ITEM.UJI.submenu.PERMOHONAN.title,
                path:`/${userType.management}`+MENU_ITEM.UJI.submenu.PERMOHONAN.path
            },
            {
                id:MENU_ITEM.UJI.submenu.MANAJEMEN.id,
                title:MENU_ITEM.UJI.submenu.MANAJEMEN.title,
                path:`/${userType.management}`+MENU_ITEM.UJI.submenu.MANAJEMEN.path
            }
        ]
    },
    {
        id:MENU_ITEM.ARSIP.id,
        title:MENU_ITEM.ARSIP.title,
        path:`/${userType.management}`+MENU_ITEM.ARSIP.path
    },
    {
        id:MENU_ITEM.MANAJEMEN_USER.id,
        title:MENU_ITEM.MANAJEMEN_USER.title,
        path:`/${userType.management}`+MENU_ITEM.MANAJEMEN_USER.path
    },
    {
        id:MENU_ITEM.MANAJEMEN_ALAT_UKUR.id,
        title:MENU_ITEM.MANAJEMEN_ALAT_UKUR.title,
        path:`/${userType.management}`+MENU_ITEM.MANAJEMEN_ALAT_UKUR.path,
        submenu: [
            {
                id: MENU_ITEM.MANAJEMEN_ALAT_UKUR.submenu.DASHBOARD.id,
                title: MENU_ITEM.MANAJEMEN_ALAT_UKUR.submenu.DASHBOARD.title,
                path: `/${userType.management}`+MENU_ITEM.MANAJEMEN_ALAT_UKUR.submenu.DASHBOARD.path
            },
            {
                id: MENU_ITEM.MANAJEMEN_ALAT_UKUR.submenu.LOG.id,
                title: MENU_ITEM.MANAJEMEN_ALAT_UKUR.submenu.LOG.title,
                path: `/${userType.management}`+MENU_ITEM.MANAJEMEN_ALAT_UKUR.submenu.LOG.path
            }
        ]
    },
    {
        id:MENU_ITEM.LOG.id,
        title:MENU_ITEM.LOG.title,
        path:`/${userType.management}`+MENU_ITEM.LOG.path
    }
]

export const personel_menu = [
    {
        id:MENU_ITEM.UJI.id,
        title:MENU_ITEM.UJI.title,
        path:`/${userType.personnel}`+MENU_ITEM.UJI.path
    },
    {
        id:MENU_ITEM.LOG.id,
        title:MENU_ITEM.LOG.title,
        path:`/${userType.personnel}`+MENU_ITEM.LOG.path
    }
]