import classNames from "classnames"

export default function Table1({className, children}) {
  return (
    <div className={classNames(
        "font-sans font-normal text-xs",
        className

    )}>
        {children}

    </div>
    )
}
