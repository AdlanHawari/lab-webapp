export default async function SingleFileDownloader(fetcher ,id, docType, fileName){
    const file = await fetcher(id, docType)
    const tempLink = document.createElement('a');
    tempLink.href = window.URL.createObjectURL(file)
    tempLink.download = fileName
    tempLink.click()
    tempLink.remove()

}