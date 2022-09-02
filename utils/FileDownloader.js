export async function SingleFileDownloader(fetcher ,id, docType, fileName){
    const file = await fetcher(id, docType)
    const tempLink = document.createElement('a');
    tempLink.href = window.URL.createObjectURL(file)
    tempLink.download = fileName
    tempLink.click()
    tempLink.remove()

}

export async function ZipFileDownloader(fetcher, id, fileName, docGroup){
    const file = await fetcher(id,docGroup)
    const tempLink = document.createElement('a');
    tempLink.href = window.URL.createObjectURL(file)
    tempLink.download = fileName
    tempLink.click()
    tempLink.remove()
}

export async function SummaryDownloader(fetcher, fileName, start_date, end_date, institution_id, test_type){
    const file = await fetcher(start_date, end_date, institution_id, test_type)
    const tempLink = document.createElement('a');
    tempLink.href = window.URL.createObjectURL(file)
    tempLink.download = fileName
    tempLink.click()
    tempLink.remove()
}