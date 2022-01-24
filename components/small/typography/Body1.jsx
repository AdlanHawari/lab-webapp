import classNames from "classnames"

export default function Body1({className, children}) {
  return (
    <div className={classNames(
        "body1",
        className

    )}>
        {children}

    </div>
    )
}
