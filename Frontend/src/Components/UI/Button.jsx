import './Button.css'

const Button = ({ text, onClick, type = 'button', disabled = false, variant = 'primary' }) => {
  return (
    <button 
      className={`button ${variant} ${disabled ? 'disabled' : ''}`} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button