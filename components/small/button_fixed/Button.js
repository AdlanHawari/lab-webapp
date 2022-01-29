import classNames from "classnames";

// export default function Button({disabled, primary, neutral, children}) {
export default function Button({
    className,
    type,
    disabled,
    onClick,
    children
    }) {
  return (
      <>
    {/* primary default */}
        {/* <button className="block w-full py-2.5 rounded-xl text-xs font-semibold 
        text-white bg-primary"
        disabled={disabled}
        >
            {children}
        </button> */}

    {/* primary disabled */}
        {/* <button className="block w-full py-2.5 rounded-xl text-xs font-semibold 
        text-grey-500 bg-grey-400"
        disabled={disabled}
        >
            {children}
        </button> */}

    {/* secondary default */}
        {/* <button className="block w-full py-2.5 rounded-xl text-xs font-semibold 
        border-solid border-2 bg-white
        text-primary   border-primary"
        disabled={disabled}
        >
            {children}
        </button> */}

    {/* secondary disabled */}
        {/* <button className="block w-full py-2.5 rounded-xl text-xs font-semibold 
        border-solid border-2 bg-white
        text-grey-300   border-grey-300"
        disabled={disabled}
        >
            {children}
        </button> */}

    {/* secondary neutral */}
        {/* <button className="block w-full py-2.5 rounded-xl text-xs font-semibold 
        border-solid border-2 bg-white
        text-grey-500   border-grey-500"
        disabled={disabled}
        >
            {children}
            secondary neutral
        </button> */}

    {/* experimental button */}
        <button className= {classNames(
            "block w-full py-2.5 rounded-xl text-xs font-semibold",
            className,
            type=="primary_default" && "text-white bg-primary",
            type=="primary_disabled" && "text-grey-500 bg-grey-400",
            type=="secondary_default" && "border-solid border-2 bg-white text-primary   border-primary",
            type=="secondary_disabled" && "border-solid border-2 bg-white text-grey-300   border-grey-300",
            type=="secondary_neutral" && "border-solid border-2 bg-white text-grey-500   border-grey-500"
            // !primary  && neutral && "text-grey-500 border-grey-500",
            // primary ? "" : "border-solid border-2 bg-white",
            // primary && !disabled ? "text-white bg-primary" : "text-grey-500 bg-grey-400",
            // !primary && !neutral && !disabled ? "text-primary border-primary" : "text-grey-300 border-grey-300",
            
        ) 

        }
        disabled={disabled}
        onClick={onClick}
        >
            {children}
        </button>
    </>
  )
}
