import './Message.css'

const Message = ({ children, type = 'info', onClose }) => {
  const typeClasses = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error'
  }

  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  }

  return (
    <div className={`message ${typeClasses[type]}`}>
      <span className="message-icon">{icons[type]}</span>
      <div className="message-content">{children}</div>
      {onClose && (
        <button className="message-close" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  )
}

export default Message