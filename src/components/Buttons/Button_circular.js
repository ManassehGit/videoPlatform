import './Button.css'

const Button = ({name,size}) => {
  return (
    <button className='button_c'><p style={{fontSize:size}}>{name}</p></button>
  )
}

export default Button