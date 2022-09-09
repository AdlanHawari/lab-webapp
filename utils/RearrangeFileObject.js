export default function RearrangeFileObject(filesValues, varName){
    let assignDocs = {}
    
    filesValues.map((item,index)=>{
        const no = index+1
        const key = varName+no
        assignDocs[key] = item
    })

    return assignDocs
}