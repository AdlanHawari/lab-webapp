import classNames from "classnames"

export default function CaptionReg({className, children}) {
  return (
    <div className={classNames(
        "caption-reg",
        className

    )}>
        {children}

    </div>
    )
}
