import classNames from "classnames";

export default function Input({
    className,
    type,
    placeholder,
    id,
    state,
    setState,
    readOnly,
    ref
  }) {
  return (
    <input 
      ref={ref}
      type={type}
      className= {
          (classNames
              (
                "form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300",
                className,
                state == "" ? "text-grey-500":"text-black-500"
              )
          )
      }
      name={type} id={id} value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      required 
    />
  )
}
