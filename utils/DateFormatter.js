import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function DateFormatter(){

    function readable(date){
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