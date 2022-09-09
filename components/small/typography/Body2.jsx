import classNames from "classnames";

export default function Body2({className, children}) {
  return(
    <div className={classNames(
            "body2",
            className
        )}>
            {children}
    </div>
  )
}