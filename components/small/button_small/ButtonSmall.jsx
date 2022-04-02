import classNames from 'classnames'

export default function ButtonSmall({
  className, 
  children,
  onClick,
}) {
  return (
    <button className= {classNames(
        "block w-full py-1 rounded-md button-small leading-normal bg-primary text-white",
        className
    )}
    onClick={onClick}
    >
        {children}

    </button>
  )
}
