import classNames from "classnames"

export default function BigCard({children, className}) {
  return(
      <div className={classNames(
          "big-card px-8 py-10 -z-50",
          className
      )}
      >
          {children}
      </div>
  )
}