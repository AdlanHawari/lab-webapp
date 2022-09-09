import classNames from "classnames"

export default function Title3Reg({className, children}) {
  return (
    <div className={classNames(
        "title-3-reg",
        className
    )}>
        {children}
    </div>
    )
}
