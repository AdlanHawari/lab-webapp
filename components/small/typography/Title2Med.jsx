import classNames from "classnames"

export default function Title2Med({className, children}) {
  return (
    <div className={classNames(
        "title-2-med",
        className

    )}>
        {children}

    </div>
    )
}
