import './Title.css'

const Title = ({ text, level = 2, className = '' }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag className={`title ${className}`}>
      {text}
    </HeadingTag>
  )
}

export default Title