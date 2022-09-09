import classNames from "classnames";

export default function Button({
    className,
    buttonStyle,
    type,
    disabled,
    onClick,
    form,
    children
    }) {
  return (
      <>
        <button className= {classNames(
            "block w-full py-2.5 rounded-xl text-xs font-semibold",
            buttonStyle=="primary_default" && "text-white bg-primary",
            buttonStyle=="primary_disabled" && "text-grey-500 bg-grey-400",
            buttonStyle=="secondary_default" && "border-solid border-2 bg-white text-primary   border-primary",
            buttonStyle=="secondary_disabled" && "border-solid border-2 bg-white text-grey-300   border-grey-300",
            buttonStyle=="secondary_neutral" && "border-solid border-2 bg-white text-grey-500   border-grey-500",
            className
        )}
        disabled={disabled}
        onClick={onClick}
        type={type}
        form={form}
        >
            {children}
        </button>
    </>
  )
}