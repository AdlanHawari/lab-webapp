import Link from "next/link"

export function MyLink(props) {
    let { href,
       children,
       onClick,
       className,
        ...rest 
      } = props
    return (
      <Link href={href}>
        <a {...rest} className={className} onClick={onClick}>{children}</a>
      </Link>
    )
  }