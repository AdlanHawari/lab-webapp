import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function DateFormatter(){

    function readable(date){
        if(date=="0001-01-01T00:00:00Z"){
            return "-"
        }
        return format(new Date(date), 'd MMMM yyyy', {
            locale: id
        })
    }

    function filter(date){
        return format(new Date(date), 'dd/MM/yyyy')
    }

    return{
        readable,
        filter
    }
}