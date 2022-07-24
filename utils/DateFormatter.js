import { format } from "date-fns";

export default function DateFormatter(){

    function readable(date){
        return format(new Date(date), 'dd MMMM yyyy')
    }

    function filter(date){
        return format(new Date(date), 'dd/MM/yyyy')
    }

    return{
        readable,
        filter
    }
}