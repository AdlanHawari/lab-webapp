import { MENU_ITEM } from "./menuItem"

export const client_menu = [
    {
        id:MENU_ITEM.UJI.id,
        title:MENU_ITEM.UJI.title,
        path:"/client"+MENU_ITEM.UJI.path
    },
    {
        id:MENU_ITEM.LOG.id,
        title:MENU_ITEM.LOG.title,
        path:"/client"+MENU_ITEM.LOG.path
    }
]

export const management_menu = [
    {
        id:MENU_ITEM.SUMMARY.id,
        title:MENU_ITEM.SUMMARY.title,
        path:"/manajemen"+MENU_ITEM.SUMMARY.path
    },
    {
        id:MENU_ITEM.UJI.id,
        title:MENU_ITEM.UJI.title,
        path:"/manajemen"+MENU_ITEM.UJI,
        submenu:[
            {
                id:MENU_ITEM.UJI.submenu.PERMOHONAN.id,
                title:MENU_ITEM.UJI.submenu.PERMOHONAN.title,
                path:"/manajemen"+MENU_ITEM.UJI.submenu.PERMOHONAN.path
            },
            {
                id:MENU_ITEM.UJI.submenu.MANAJEMEN.id,
                title:MENU_ITEM.UJI.submenu.MANAJEMEN.title,
                path:"/manajemen"+MENU_ITEM.UJI.submenu.MANAJEMEN.path
            }
        ]
    },
    {
        id:MENU_ITEM.ARSIP.id,
        title:MENU_ITEM.ARSIP.title,
        path:"/manajemen"+MENU_ITEM.ARSIP.path
    },
    {
        id:MENU_ITEM.MANAJEMEN.id,
        title:MENU_ITEM.MANAJEMEN.title,
        path:"/manajemen"+MENU_ITEM.MANAJEMEN.path
    },
    {
        id:MENU_ITEM.LOG.id,
        title:MENU_ITEM.LOG.title,
        path:"/manajemen"+MENU_ITEM.LOG.path
    }
]

export const personel_menu = [
    {
        id:MENU_ITEM.UJI.id,
        title:MENU_ITEM.UJI.title,
        path:"/personel"+MENU_ITEM.UJI.path
    },
    {
        id:MENU_ITEM.LOG.id,
        title:MENU_ITEM.LOG.title,
        path:"/personel"+MENU_ITEM.LOG.path
    }
]