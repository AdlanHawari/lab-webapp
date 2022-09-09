import classNames from "classnames"

export default function TableSmall({className, children}) {
  return (
    <div className={classNames(
        "table-small",
        className
    )}>
        {children}
    </div>
    )
}