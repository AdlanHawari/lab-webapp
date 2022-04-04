import classNames from "classnames"

export default function Title3Med({className, children}) {
  return (
    <div className={classNames(
        "title-3-med",
        className

    )}>
        {children}

    </div>
    )
}
