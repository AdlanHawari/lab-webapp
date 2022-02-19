import classNames from "classnames"

export default function Body3({className, children}) {
  return (
    <div className={classNames(
        "body3",
        className

    )}>
        {children}

    </div>
    )
}
