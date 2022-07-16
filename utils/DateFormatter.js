import { format } from "date-fns";

export default function DateFormatter(date){
    return format(new Date(date), 'dd/MM/yyyy')
}