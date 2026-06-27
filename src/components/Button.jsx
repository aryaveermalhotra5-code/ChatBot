
function Button({className , label , onclick}) {
  return (
    <button className={className} onClick={onclick} >
        {label}
    </button>
  )
}

export default Button