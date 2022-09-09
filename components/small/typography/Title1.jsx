import classNames from "classnames"

export default function Title1({className, children}) {
  return (
    <div className={classNames(
        "title-1",
        className
    )}>
        {children}
    </div>
    )
}