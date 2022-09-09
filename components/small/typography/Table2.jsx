import classNames from "classnames"

export default function Table2({className, children}) {
  return (
    <div className={classNames(
        "font-sans font-semibold text-xs",
        className
    )}>
        {children}
    </div>
    )
}