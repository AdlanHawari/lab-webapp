export default function RearrangeFileObject(filesValues, varName){
    var assignDocs = {}
    
            filesValues.map((item,index)=>{
                const no = index+1
                const key = varName+no
                assignDocs[key] = item
            })

            return assignDocs
}