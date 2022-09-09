import { formatDistanceToNowStrict } from "date-fns"
import { id } from "date-fns/locale"

export default function HMinus(targetDate) {

    if(targetDate && targetDate!="0001-01-01T00:00:00Z"){
        
        return formatDistanceToNowStrict(new Date(targetDate),
        {
            locale: id
        })
    }
    return "-"
    
    
}
