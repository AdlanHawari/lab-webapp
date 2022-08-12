import { formatDistanceToNow } from "date-fns"
import { id } from "date-fns/locale"

export default function HMinus(targetDate) {
    return formatDistanceToNow(new Date(targetDate),{locale: id})
}
