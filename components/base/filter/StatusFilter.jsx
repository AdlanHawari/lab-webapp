import classNames from 'classnames'
import QuickFilterButton from 'components/small/button_small/QuickFilterButton'
import Title1 from 'components/small/typography/Title1'
import TitleSmall from 'components/small/typography/TitleSmall'
import React from 'react'

export default function StatusFilter({filter, space,onClick, titleSpace}) {
  return (
    <div className={classNames('flex items-center ',
    titleSpace ? titleSpace : "space-x-3"
    )}>
        <Title1>
            Status
        </Title1>
        <div className={classNames("flex",
        space ? space : "space-x-1"
        )}>
            {filter.map((item,index)=>(
                <QuickFilterButton key={index} className="bg-primary-lighten10 border-primary-darken10"
                onClick={onClick}>
                    <TitleSmall className="text-primary-darken10">
                        {item}
                    </TitleSmall>
                </QuickFilterButton>

            ))}
            {/* <QuickFilterButton className="bg-primary-lighten10 border-primary-darken10">
                <TitleSmall className="text-primary-darken10">
                    Semua
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Pengajuan
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Konfirmasi Penawaran
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Kaji Ulang Pengajuan
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Menunggu Konfirmasi
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Menuggu Jadwal
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Dijadwalkan
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Dalam Pengolahan
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Submit Balis
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Selesai
                </TitleSmall>
            </QuickFilterButton>
            <QuickFilterButton>
                <TitleSmall className="text-grey-700">
                    Batal
                </TitleSmall>
            </QuickFilterButton> */}
        </div>
    </div>
  )
}
