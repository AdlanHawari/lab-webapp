import { formatDistanceStrict } from "date-fns";
import { id } from "date-fns/locale"

export default function IntervalDate(targetDate, baseDate) {
  
    return formatDistanceStrict(new Date(targetDate), new Date(baseDate),
    {
        locale: id
    })
}
