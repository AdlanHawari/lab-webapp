import classNames from "classnames";

export default function Input({
    className,
    type,
    placeholder,
    id,
    state,
    setState
  }) {
  return (
    <input type={type}
      className= {
          (classNames
              (
                
              "form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300",
              state == "" ? "text-grey-500":"text-black-500"
              )
          )
      }
      name={type} id={id} value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      required 
    />
  )
}
